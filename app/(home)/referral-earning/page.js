'use client';

import api from '@/services/api';
import {getFormattedDate, numberWithCommas} from '@/utils/helper';
import {Input} from 'antd';
import React, {useEffect, useState} from 'react'

const Page = () => {


    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [search, setSearch] = useState('');


    const getTransactions = async () => {
        try {
            setLoading(true);
            let res = await api.get('/transaction-history');
            if (res?.data?.status) {

                let bonusAmount = res?.data?.data?.filter((item) => item.amount_type === 'Referral Bonus');

                setTransactions(bonusAmount);


            }

        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }


    useEffect(() => {
        getTransactions();
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, [])

    const onSearch = (e) => {
        setSearch(e.target.value)

    }


    return (
        <div className="statement">
            <div className="statemnet_header">
                <h1 className="wallet_balance">
                    Wallet Balance : Rs.{numberWithCommas(user?.wallet_amount)}
                </h1>
                {
                    user?.wallet_amount >= 10000 && <StyledButton>
                        Withdraw
                    </StyledButton>
                }

            </div>
            <div className="styled_table">
                <div className="th">
                    <div className="td">Amount</div>
                    <div className="td">Amount Type</div>
                    <div className="td">Recevied From</div>

                    <div className="td">Date</div>
                </div>

                {
                    loading ? <div className="tr">
                            <div className="td">loading...</div>
                        </div> :
                        transactions.map((transaction, i) => {
                            return (
                                <div key={i} className="tr">
                                    <div className="td">Rs {numberWithCommas(transaction.amount)}</div>
                                    <div className="td">{transaction.amount_type}</div>
                                    <div className="td">{transaction.received_from}</div>
                                    <div className="td">{getFormattedDate(transaction.created_at)}</div>
                                </div>
                            )
                        })
                }
                {
                    transactions.length === 0 && !loading ? <div className="tr">
                            <div className="td">No Data Found</div>
                        </div>
                        : null}
            </div>
        </div>
    )
}

export default Page
