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
namespace TencentCloud\Cpdp\V20190820\Models;
use TencentCloud\Common\AbstractModel;

/**
 * 云企付-账单信息
 *
 * @method string getFirstName() 获取账单人名字
 * @method void setFirstName(string $FirstName) 设置账单人名字
 * @method string getLastName() 获取账单人姓氏
 * @method void setLastName(string $LastName) 设置账单人姓氏
 * @method string getAddressOne() 获取账单地址1
 * @method void setAddressOne(string $AddressOne) 设置账单地址1
 * @method string getAddressTwo() 获取账单地址1
 * @method void setAddressTwo(string $AddressTwo) 设置账单地址1
 * @method string getCity() 获取账单地址所在城市
 * @method void setCity(string $City) 设置账单地址所在城市
 * @method string getState() 获取账单地址所在州/省，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编 码标准中的两位字母编码。
 * @method void setState(string $State) 设置账单地址所在州/省，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编 码标准中的两位字母编码。
 * @method string getCountry() 获取账单地址所在国家，使用ISO-3166-1标准中的两位字母编码。
 * @method void setCountry(string $Country) 设置账单地址所在国家，使用ISO-3166-1标准中的两位字母编码。
 * @method string getZipCode() 获取账单地址邮编
 * @method void setZipCode(string $ZipCode) 设置账单地址邮编
 * @method string getPhone() 获取账单人手机号
 * @method void setPhone(string $Phone) 设置账单人手机号
 */
class OpenBankBillingInfo extends AbstractModel
{
    /**
     * @var string 账单人名字
     */
    public $FirstName;

    /**
     * @var string 账单人姓氏
     */
    public $LastName;

    /**
     * @var string 账单地址1
     */
    public $AddressOne;

    /**
     * @var string 账单地址1
     */
    public $AddressTwo;

    /**
     * @var string 账单地址所在城市
     */
    public $City;

    /**
     * @var string 账单地址所在州/省，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编 码标准中的两位字母编码。
     */
    public $State;

    /**
     * @var string 账单地址所在国家，使用ISO-3166-1标准中的两位字母编码。
     */
    public $Country;

    /**
     * @var string 账单地址邮编
     */
    public $ZipCode;

    /**
     * @var string 账单人手机号
     */
    public $Phone;

    /**
     * @param string $FirstName 账单人名字
     * @param string $LastName 账单人姓氏
     * @param string $AddressOne 账单地址1
     * @param string $AddressTwo 账单地址1
     * @param string $City 账单地址所在城市
     * @param string $State 账单地址所在州/省，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编 码标准中的两位字母编码。
     * @param string $Country 账单地址所在国家，使用ISO-3166-1标准中的两位字母编码。
     * @param string $ZipCode 账单地址邮编
     * @param string $Phone 账单人手机号
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
        if (array_key_exists("FirstName",$param) and $param["FirstName"] !== null) {
            $this->FirstName = $param["FirstName"];
        }

        if (array_key_exists("LastName",$param) and $param["LastName"] !== null) {
            $this->LastName = $param["LastName"];
        }

        if (array_key_exists("AddressOne",$param) and $param["AddressOne"] !== null) {
            $this->AddressOne = $param["AddressOne"];
        }

        if (array_key_exists("AddressTwo",$param) and $param["AddressTwo"] !== null) {
            $this->AddressTwo = $param["AddressTwo"];
        }

        if (array_key_exists("City",$param) and $param["City"] !== null) {
            $this->City = $param["City"];
        }

        if (array_key_exists("State",$param) and $param["State"] !== null) {
            $this->State = $param["State"];
        }

        if (array_key_exists("Country",$param) and $param["Country"] !== null) {
            $this->Country = $param["Country"];
        }

        if (array_key_exists("ZipCode",$param) and $param["ZipCode"] !== null) {
            $this->ZipCode = $param["ZipCode"];
        }

        if (array_key_exists("Phone",$param) and $param["Phone"] !== null) {
            $this->Phone = $param["Phone"];
        }
    }
}
