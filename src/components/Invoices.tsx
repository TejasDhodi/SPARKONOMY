import { Pencil } from 'lucide-react';
import React, { useState } from 'react';

type InvoiceStatus = "Paid" | "Unpaid" | "Disputed" | "Partially Paid" | "Overdue" | "Awaited" | "Draft";

type Invoice = {
    ClientName: string;
    amount: number;
    due: string;
    status: InvoiceStatus;
};

const statusOptions: InvoiceStatus[] = [
    "Paid", "Unpaid", "Disputed", "Partially Paid", "Overdue", "Awaited", "Draft"
];

const getStatusStyle = (status: InvoiceStatus) => {
    switch (status) {
        case "Paid": return "bg-[#9CEFB8] text-green-600";
        case "Unpaid": return "bg-gray-200 text-[#999999]";
        case "Disputed": return "bg-[#FFB1B1] text-red-600";
        case "Partially Paid": return "bg-[#FFFAE5] text-[#FFCC00]";
        case "Overdue": return "bg-[#FFB1B1] text-[#FF2D55]";
        case "Awaited": return "bg-yellow-100 text-yellow-700";
        case "Draft": return "bg-gray-100 text-gray-500";
        default: return "bg-gray-100 text-gray-500";
    }
};

const Invoices = () => {
    const [invoiceData, setInvoiceData] = useState<Invoice[]>([
        { ClientName: "Client A", amount: 12500, due: "2024-06-15", status: "Paid" },
        { ClientName: "Client B", amount: 12500, due: "2024-06-15", status: "Unpaid" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Disputed" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Paid" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Partially Paid" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Overdue" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Awaited" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Draft" },
        { ClientName: "Income Trend", amount: 125000, due: "2024-06-15", status: "Paid" }
    ]);

    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [filterStatus, setFilterStatus] = useState<InvoiceStatus | "All">("All");
    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    const handleStatusChange = (index: number, newStatus: InvoiceStatus) => {
        const updatedData = [...invoiceData];
        updatedData[index].status = newStatus;
        setInvoiceData(updatedData);
        setEditIndex(null); 
    };

    const filteredInvoices = filterStatus === "All"
        ? invoiceData
        : invoiceData.filter(invoice => invoice.status === filterStatus);

    return (
        <div className="flex flex-col gap-2 max-w-md lg:max-w-[70%] mx-auto mb-[50px]">

            <div className="flex items-center justify-between mb-4 relative">
                <h2
                    className="text-base lg:text-2xl font-semibold cursor-pointer w-full flex items-center justify-between"
                    onClick={() => setFilterOpen(!filterOpen)}
                >
                    <span className='text-primary-gray'>Your Invoices </span>
                    <span>▾</span>
                </h2>

                {filterOpen && (
                    <div className="w-full absolute top-8 left-0 z-10 bg-white border rounded shadow w-40">
                        <ul className="text-sm">
                            <li
                                className={`cursor-pointer border-b-1 border-b-commonGray px-4 py-2 hover:bg-gray-100 ${filterStatus === "All" ? "font-semibold" : ""}`}
                                onClick={() => { setFilterStatus("All"); setFilterOpen(false); }}
                            >
                                All
                            </li>
                            {statusOptions.map(status => (
                                <li
                                    key={status}
                                    className={`cursor-pointer px-4 border-b-1 border-b-commonGray py-2 hover:bg-gray-100 ${filterStatus === status ? "font-semibold" : ""}`}
                                    onClick={() => { setFilterStatus(status); setFilterOpen(false); }}
                                >
                                    {status}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Invoice List */}
            {filteredInvoices.length === 0 ? (
                <p className="text-sm text-gray-500">No invoices found for "{filterStatus}".</p>
            ) : (
                filteredInvoices.map((currElem, index) => {
                    const { ClientName, amount, due, status } = currElem;

                    return (
                        <div
                            key={index}
                            className="rounded-xl p-4 border border-gray-200 flex justify-between items-center shadow-sm bg-white"
                        >
                            <div>
                                <p className="text-[#6B7280] font-medium text-sm lg:text-xl">{ClientName}</p>
                                <p className="text-xs lg:text-sm lg:mt-2 text-primary-gray">₹{amount.toLocaleString()}, Due: {due}</p>
                            </div>

                            <div className="relative">
                                {editIndex === index ? (
                                    <select
                                        value={status}
                                        onChange={(e) =>
                                            handleStatusChange(index, e.target.value as InvoiceStatus)
                                        }
                                        className="text-sm border border-gray-300 rounded px-2 py-1 cursor-pointer"
                                    >
                                        {statusOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <button
                                        onClick={() => setEditIndex(index)}
                                        className='flex items-center gap-2'
                                    >
                                        <button className={`flex items-center cursor-pointer text-sm px-[15px] py-[9px] rounded-[24px] text-xs font-medium whitespace-nowrap ${getStatusStyle(status)}`}>
                                            {status}
                                        </button>
                                        {status === 'Awaited' && <img src='/Images/bell.svg' alt="bell" />}
                                        {status === "Draft" && <Pencil size={17} color='gray' />}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Invoices;
