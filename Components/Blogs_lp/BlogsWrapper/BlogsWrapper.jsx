'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './BlogsWrapper.scss';
import { Field, Form, Formik } from 'formik';
import { FaBars, FaFacebookF, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa';
import BlogsFooter from '../BlogsFooter/BlogsFooter';

function BlogsWrapper({ children }) {
	const testimonials = [
		{
			name: 'User Name 1',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		{
			name: 'User Name 2',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		{
			name: 'User Name 1',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		{
			name: 'User Name 2',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		{
			name: 'User Name 1',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		{
			name: 'User Name 2',
			image: '/blogs/images/user.png',
			quote: 'Lorem ipsum dolor sit amet consectetur. Ipsum rutrum sit pellentesque id eget. Fringilla felis scelerisque pharetra lectus enim fames leo mi. Ac nisl ac nulla venenatis sit. Faucibus sit ac vehicula fringilla montes.'
		},
		// Add more testimonials here
	];
	const [input, setInput] = useState('');
	const [headerStatus, setHeaderStatus] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	const notify = (mode) => {
		if (mode === 'success') {
			toast.success("Success Notification !", { position: "top-right", autoClose: 2000, hideProgressBar: true, transition: Slide });
		} else if (mode === 'error') {
			toast.error("Error Notification !", { position: "top-right", autoClose: 2000, hideProgressBar: true, transition: Slide });
		} else {
			toast('🦄 Wow so easy!', { position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: true, progress: false, theme: "light", transition: Slide });
		}
	};

	const handleSearch = (values) => {
		if (values.query.trim()) {
			setInput(values.query);
			notify('success');
		} else {
			notify('error');
			console.log('Search query cannot be empty');
		}
	};

	function handleHeader() {
		if (!isLargeScreen) { // Only trigger if screen width is less than 768px
			setHeaderStatus(prev => !prev);
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				const isLarge = window.innerWidth > 767;
				setIsLargeScreen(isLarge);
				if (isLarge) setHeaderStatus(false); // Automatically close header if screen is larger than 768px
			};

			handleResize(); // Set initial screen size on mount
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return (
		<div className='blogsWrapper'>
			<header>
				<Link href='/us/blogs' className="logoCont">
					<Image src={'/blogs/images/logo.png'} alt='Website Logo' width={125} height={52} />
				</Link>

				<ul className={`headerLinks ${headerStatus ? "active" : ""}`}>
					<li><Link onClick={handleHeader} href={'/us/category/phone-reviews'}>Phone Reviews</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/upcoming-phones'}>Upcoming Phone</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/top-10'}>Top 10 List</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/top-5'}>Top 5 List</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/phone-news'}>Phone News</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/news'}>News</Link></li>
					<li><Link onClick={handleHeader} href={'/us/category/brands'}>Brands Name</Link></li>
				</ul>

				<ul className="socialList">
					<li className="searchBar">
						<Formik
							initialValues={{ query: '' }}
							onSubmit={(values, { resetForm }) => {
								handleSearch(values);
								resetForm();
							}}
						>
							{formikProps => (
								<Form>
									<div className='inputCont'>
										<button type="submit" disabled={!formikProps.values.query.trim()}>
											<FaSearch />
										</button>
										<Field
											name="query"
											placeholder="Search..."
											onChange={formikProps.handleChange}
											value={formikProps.values.query}
										/>
									</div>
								</Form>
							)}
						</Formik>
					</li>
					<li><Link href={''}><FaFacebookF /></Link></li>
					<li><Link href={''}><FaInstagram /></Link></li>
					<li><Link href={''}><FaTwitter /></Link></li>
				</ul>
				<div onClick={handleHeader} className="menuToggleBtn">
					<FaBars />
				</div>
			</header>

			<ToastContainer />
			{children}
			<section className="testimonialSec">
				<div className="containerCont">
					<h2 className="secHeading">Testimonials</h2>
					<div className="sliderCont">
						<Swiper
							pagination={{ clickable: true }}
							modules={[Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							loop={true}
							breakpoints={{
								575: { slidesPerView: 2, spaceBetween: 20 },
								768: { slidesPerView: 3, spaceBetween: 30 },
								991: { slidesPerView: 4 },
							}}
						>
							{testimonials.map((testimonial, index) => (
								<SwiperSlide key={index}>
									<div className="testiCard">
										<div className="user">
											<Image src='/blogs/images/quotes.png' alt='Quotes Image' width={100} height={77} className='quotes' />
											<figure>
												<img src={testimonial.image} alt={testimonial.name} />
											</figure>
											<h3>{testimonial.name}</h3>
										</div>
										<p>{testimonial.quote}</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
			<BlogsFooter />
		</div>
	);
}

export default BlogsWrapper;
