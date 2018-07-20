/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

console.log('start iabtest script');

document.getElementById('test1').onclick = function() {
    console.log('start custom scheme test 1');
    window.location = 'myscheme://mylocation';
    console.log('finished custom scheme test 1');
};

document.getElementById('test2').onclick = function() {
    console.log('start custom scheme test 2');
    window.location.replace('myscheme://mylocation');
    console.log('finished custom scheme test 2');
};

document.getElementById('test3').onclick = function() {
    console.log('start custom scheme test 2');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'myscheme://mypath');
    xhr.send();
    console.log('finished custom scheme test 3');
};
