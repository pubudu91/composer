/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Plugin from 'core/plugin/plugin';
import { CONTRIBUTIONS } from 'core/plugin/constants';
import { REGIONS } from 'core/layout/constants';
/** Plugin imports */
import { getCommandDefinitions } from './commands';
import { getHandlerDefinitions } from './handlers';
import { getMenuDefinitions } from './menus';
import TryIt from './views/try-it-container';
import { VIEWS as TRY_IT_VIEW, TRY_IT_PLUGIN_ID, LABELS } from './constants';

/**
 * Plugin for Ballerina Lang
 */
class TryItPlugin extends Plugin {

    /**
     * @inheritdoc
     */
    getID() {
        return TRY_IT_PLUGIN_ID;
    }

    /**
     * @inheritdoc
     */
    getContributions() {
        const { COMMANDS, HANDLERS, MENUS, VIEWS } = CONTRIBUTIONS;
        return {
            [COMMANDS]: getCommandDefinitions(this),
            [HANDLERS]: getHandlerDefinitions(this),
            [MENUS]: getMenuDefinitions(this),
            [VIEWS]: [
                {
                    id: TRY_IT_VIEW.TRY_IT_VIEW_ID,
                    component: TryIt,
                    propsProvider: () => {
                        return {
                        };
                    },
                    region: REGIONS.EDITOR_TABS,
                    // region specific options for editor-tabs views
                    regionOptions: {
                        tabTitle: LABELS.TRY_IT_HEADING,
                        customTitleClass: 'try-it-title',
                    },
                },
            ],
        };
    }

}

export default TryItPlugin;
