import { BookServiceToken } from "@core/services/book/book-i.service";
import { BookMockService } from "@core/services/book/book-mock.service";
import { FilterServiceToken } from "@core/services/filter/filter-i.service";
import { FilterMockService } from "@core/services/filter/filter-mock.service";
import { SubscriptionServiceToken } from "@core/services/subscription/subscription-i.service";
import { SubscriptionMockService } from "@core/services/subscription/subscription-mock.service";

export const restServices = [
  { provide: FilterServiceToken, useClass: FilterMockService },
  { provide: SubscriptionServiceToken, useClass: SubscriptionMockService },
  { provide: BookServiceToken, useClass: BookMockService }
];
