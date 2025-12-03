import { dashboard, login, register } from '@/routes';
import { Head, Link, usePage } from '@inertiajs/react';
import Layout  from '@/layouts/layout'; 
export default function Home() {
    const { auth } = usePage().props;
    // for href links we use routes from routes file
    // we import the route and use them like this dashboard()
    // I'm still not sure how to use them but I can adapt

    return (
        <Layout>
            <Head title="Welcome"/>
            <h1>Testing here</h1>
        </Layout>
    );
}
