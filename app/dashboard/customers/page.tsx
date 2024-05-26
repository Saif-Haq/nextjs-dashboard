import { Metadata } from 'next';
import CustomersTable from '../../ui/customers/table';
import { fetchCustomers, fetchFilteredCustomers } from '../../lib/data';

export const metadata: Metadata = {
    title: 'Customer',
};

export default async function Page({ searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);

    return <CustomersTable customers={customers} />;
}