import { TestBed, inject } from '@angular/core/testing';

import { FilterUpdateService } from './filter-update.service';

describe('FilterUpdateService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FilterUpdateService
            ]
        });
    });

    it('should be created', inject([FilterUpdateService], (service: FilterUpdateService) => {
        expect(service).toBeTruthy();
    }));

    it('updateFilter() should emit data to subject', inject([FilterUpdateService], (service: FilterUpdateService) => {
        service.subject.subscribe((message) => {
            expect(message).not.toBeNull();
            expect(message.status).toBeTruthy();
        });
        service.updateFilter(true);
    }));

    it('updateFilter() should emit data to getFilter()', inject([FilterUpdateService], (service: FilterUpdateService) => {
        service.getFilter().subscribe((message) => {
            expect(message).not.toBeNull();
            expect(message.status).toBeFalsy();
        });
        service.updateFilter(false);
    }));
});
