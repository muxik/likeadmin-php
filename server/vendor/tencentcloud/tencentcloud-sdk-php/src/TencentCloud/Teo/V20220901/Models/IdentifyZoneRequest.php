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
namespace TencentCloud\Teo\V20220901\Models;
use TencentCloud\Common\AbstractModel;

/**
 * IdentifyZone请求参数结构体
 *
 * @method string getZoneName() 获取站点名称。
 * @method void setZoneName(string $ZoneName) 设置站点名称。
 * @method string getDomain() 获取站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。

 * @method void setDomain(string $Domain) 设置站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。
 */
class IdentifyZoneRequest extends AbstractModel
{
    /**
     * @var string 站点名称。
     */
    public $ZoneName;

    /**
     * @var string 站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。

     */
    public $Domain;

    /**
     * @param string $ZoneName 站点名称。
     * @param string $Domain 站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。
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
        if (array_key_exists("ZoneName",$param) and $param["ZoneName"] !== null) {
            $this->ZoneName = $param["ZoneName"];
        }

        if (array_key_exists("Domain",$param) and $param["Domain"] !== null) {
            $this->Domain = $param["Domain"];
        }
    }
}
