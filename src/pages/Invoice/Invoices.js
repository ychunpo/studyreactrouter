import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

export function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

export function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

export function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}