import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { IInvoice } from '@/interfaces/invoice';

// Faker.
import { faker } from '@faker-js/faker';

// Interfaces
export interface IInvoiceContext {
  invoice: IInvoice;
  setInvoice: Dispatch<SetStateAction<IInvoice>>;
}

interface ProviderProps {
  children: ReactNode;
}

/** Initial state */
export const initialInvoice: IInvoice = {
  fileName: 'test-invoice-filename',
  invoiceNumber: faker.random.numeric(4),
  date: faker.date.soon().toLocaleDateString(),
  due: faker.date.soon(7).toLocaleDateString(),
  sender: {
    companyName: 'Your Company',
    firstName: 'Riski',
    lastName: '',
    country: 'Indonesia',
    addressLine1: 'Jl. Parahyangan',
    addressLine2: 'Kota Baru Parahyangan',
    state: 'Jawa Barat',
    city: 'Bandung Barat',
    phone: '(021) xxxxxxxxx',
    email: 'hi@riski.me',
  },
  recipient: {
    companyName: faker.company.companyName() + ' ' + faker.company.companySuffix(),
    firstName: faker.name.findName(),
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.street(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    country: faker.address.country(),
    postalCode: faker.address.zipCode('####'),
    phone: faker.phone.phoneNumber(),
    email: undefined,
  },
  items: [
    {
      description: 'Schematic Design',
      quantity: '1',
      rate: '500000',
      amount: '500000',
    },
    {
      description: 'Logo Design',
      quantity: '1',
      rate: '300000',
      amount: '300000',
    },
    {
      description: 'Website Company Profile (NextJs SPA)',
      quantity: '1',
      rate: '3000000',
      amount: '3000000',
    },
    {
      description: 'Database Administration',
      quantity: '2',
      rate: '500000',
      amount: '1000000',
    },
    {
      description: 'Back-End & Front-End Development',
      quantity: '1',
      rate: '2500000',
      amount: '2500000',
    },
    {
      description: 'CMS Development & Customization',
      quantity: '1',
      rate: '2000000',
      amount: '2000000',
    },
  ],
  taxRate: 10,
  terms: faker.random.words(16),
  notes: '',
  footerMessages: 'Thank you for your business!',
};

/**
 * Invoice context
 */
export const invoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);
