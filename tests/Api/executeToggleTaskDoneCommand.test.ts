/**
 * @jest-environment jsdom
 */

import moment from 'moment';
import type { App } from 'obsidian';
import { tasksApiV1 } from '../../src/Api';

jest.mock('obsidian', () => ({
    Modal: class Mock {},
}));

window.moment = moment;

const app = {} as App;
describe('APIv1 - executeToggleTaskDoneCommand', () => {
    const api = tasksApiV1(app);
    const todaySpy = jest.spyOn(Date, 'now').mockReturnValue(moment('2022-09-04').valueOf());

    // This is a simple smoke test to make sure executeToggleTaskDoneCommand is working. Its core
    // functionality is covered by other tests
    it('should complete a task', () => {
        expect(api.executeToggleTaskDoneCommand('- [ ] ', 'x.md')).toBe('- [x]  ✅ 2022-09-04');
        expect(api.executeToggleTaskDoneCommand('- [x] ✅ 2022-09-04', 'x.md')).toBe('- [ ] ');
    });

    todaySpy.mockClear();
});
