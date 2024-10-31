import ProfileLayout from "@/app-ui/ProfileLayout/ProfileLayout";

const Page = ({ params: { slug } }) => {
    return (
        <section className="profile_layout">
            <ProfileLayout slug={slug} />
        </section>
    );
};

export default Page;

export async function generateMetadata({ params: { slug } }) {
    const [id, title] = slug;

    // Define the API URL
    const url = `https://api.mobilezmarket.com/api/user-filter/${id}`;

    // Fetch profile data
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    // Check if response is successful
    if (!res.ok) {
        throw new Error("Failed to fetch profile data");
    }

    const profile = await res.json();

    // Construct metadata
    const og = {
        title: `${profile?.user?.name} | Mobilez Market`,
        description: "Mobilez Market",
        url: `https://mobilezmarket.com/profile/${id}/${title}`,
        images: [
            {
                url: `https://api.mobilezmarket.com/images/${profile?.user?.photo}`,
                width: 800,
                height: 600,
                alt: "Profile photo of the user",
            },
        ],
    };

    // Format title
    const formattedTitle = title
        .split("-")
        .map((word) => word.charAt(0).toUpperCase + word.slice(1))
        .join(" ");

    return {
        title: `${formattedTitle} | Mobilez Market`,
        description: "Mobilez Market",
        openGraph: og,
        alternates: {
            canonical: `https://www.mobilezmarket.com/${formattedTitle}`,
        },
    };
}
