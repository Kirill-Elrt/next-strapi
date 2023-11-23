'use client';
import {useEffect, useState} from "react";
import {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import axios from "axios";
import {useSession} from "next-auth/react";
import {Table, TreeSelect} from "antd";

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}

interface PatternTableProps {
    columns: [],
    availableColumns: [],
    url: String,
    selectedColumnsParam: [],
}
export default function PatternTable<T>({columns, availableColumns, url, selectedColumnsParam = []} : PatternTableProps) {

    const {data: session} = useSession();
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const [loading, setLoading] = useState(false);
    const [selectedColumns, setSelectedColumns] = useState(selectedColumnsParam);
    const [visibleColumns, setVisibleColumns] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true);
        handleColumnsChange(selectedColumns);
        axios.get(url, {
            headers: {Authorization: "Bearer " + session?.accessToken},
        })
            .then(({data}) => {
                setData(data.data);
                setLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: data.meta.total,
                    }
                });
            })
            .catch(err => {
                console.error(err);
            });
        console.log(data);
    }, [JSON.stringify(tableParams)]);

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue>,
        sorter: SorterResult<T>,
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    const handleColumnsChange = (newValue: string[]) => {
        setSelectedColumns(newValue);
        const newColumns = columns.filter(item => newValue.includes(item.key));
        newColumns.push(columns.find(item => item.key == 'action'));
        setVisibleColumns(newColumns);
    };

    return (
        <div className={"flex flex-col"}>
            <TreeSelect
                className={"m-2"}
                treeData={availableColumns}
                value={selectedColumns}
                onChange={handleColumnsChange}
                showSearch={false}
                treeCheckable={true}
            />
            <Table className={'m-2'}
                   columns={visibleColumns}
                   rowKey={(record) => record.id}
                   dataSource={data}
                   pagination={tableParams.pagination}
                   loading={loading}
                   onChange={handleTableChange}
                   scroll={{x: 900, y: 200}}
                   virtual={false}
            />
        </div>

    )
}