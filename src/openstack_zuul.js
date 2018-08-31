// Copyright 2018 Sorin Sbarnea
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ==UserScript==
// @name     Improve Zuul UI
// @author   Sorin Sbarnea
// @version  1
// @grant    GM_addStyle
// @include  https://zuul.openstack.org/*
// @grant    GM_addStyle
// @supportURL https://github.com/mpeterson/openstack-greasemonkey-helpers/issues
// ==/UserScript==

GM_addStyle(`
.zuul-patchset-header {
    cursor: pointer;
}
`);

