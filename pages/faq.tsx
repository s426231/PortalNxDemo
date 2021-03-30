import Head from 'next/head'
import React, {FC} from 'react';
import {Grid} from "@material-ui/core";
import FaqItem from "../components/faq-item/FaqItem";
import PageHeader from "../components/page-header/PageHeader";

const faq = [{
    question: "Whats up?",
    answer: "Nothing"
}, {
    question: "Do you like Tik Tok?",
    answer: "No one does"
}, {
    question: "Is influencer a real job? ",
    answer: "No never"
}, {
    question: "???",
    answer: "!!!"
}, {
    question: "Lorem...?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n" +
        "sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing\n" +
        "elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum\n" +
        "dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet\n" +
        "blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
}, {
    question: "What is funny?",
    answer: "You :D"
},]
const FAQ: FC = () => {
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <Grid xs={12}>
                <Grid xs={12}>
                    <PageHeader headerText="FAQ"/>
                </Grid>
                <Grid xs={12}>
                    {faq.map((item) => {
                        return <FaqItem answer={item.answer} question={item.question}/>
                    })}
                </Grid>
            </Grid>
        </>
    )
}
export default FAQ;