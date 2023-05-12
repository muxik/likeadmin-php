<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Tcss\V20201101\Models;
use TencentCloud\Common\AbstractModel;

/**
 * CreateEscapeEventsExportJob请求参数结构体
 *
 * @method integer getLimit() 获取需要返回的数量，最大值为10000
 * @method void setLimit(integer $Limit) 设置需要返回的数量，最大值为10000
 * @method integer getOffset() 获取偏移量，默认为0。
 * @method void setOffset(integer $Offset) 设置偏移量，默认为0。
 * @method array getFilters() 获取过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
 * @method void setFilters(array $Filters) 设置过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
 * @method string getOrder() 获取升序降序,asc desc
 * @method void setOrder(string $Order) 设置升序降序,asc desc
 * @method string getBy() 获取排序字段：latest_found_time
 * @method void setBy(string $By) 设置排序字段：latest_found_time
 * @method array getExportField() 获取导出字段
 * @method void setExportField(array $ExportField) 设置导出字段
 */
class CreateEscapeEventsExportJobRequest extends AbstractModel
{
    /**
     * @var integer 需要返回的数量，最大值为10000
     */
    public $Limit;

    /**
     * @var integer 偏移量，默认为0。
     */
    public $Offset;

    /**
     * @var array 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
     */
    public $Filters;

    /**
     * @var string 升序降序,asc desc
     */
    public $Order;

    /**
     * @var string 排序字段：latest_found_time
     */
    public $By;

    /**
     * @var array 导出字段
     */
    public $ExportField;

    /**
     * @param integer $Limit 需要返回的数量，最大值为10000
     * @param integer $Offset 偏移量，默认为0。
     * @param array $Filters 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
     * @param string $Order 升序降序,asc desc
     * @param string $By 排序字段：latest_found_time
     * @param array $ExportField 导出字段
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("Limit",$param) and $param["Limit"] !== null) {
            $this->Limit = $param["Limit"];
        }

        if (array_key_exists("Offset",$param) and $param["Offset"] !== null) {
            $this->Offset = $param["Offset"];
        }

        if (array_key_exists("Filters",$param) and $param["Filters"] !== null) {
            $this->Filters = [];
            foreach ($param["Filters"] as $key => $value){
                $obj = new RunTimeFilters();
                $obj->deserialize($value);
                array_push($this->Filters, $obj);
            }
        }

        if (array_key_exists("Order",$param) and $param["Order"] !== null) {
            $this->Order = $param["Order"];
        }

        if (array_key_exists("By",$param) and $param["By"] !== null) {
            $this->By = $param["By"];
        }

        if (array_key_exists("ExportField",$param) and $param["ExportField"] !== null) {
            $this->ExportField = $param["ExportField"];
        }
    }
}
