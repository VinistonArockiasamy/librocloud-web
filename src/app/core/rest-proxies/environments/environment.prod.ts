import { BookServiceToken } from "@core/services/book/book-i.service";
import { BookService } from "@core/services/book/book.service";
import { FilterServiceToken } from "@core/services/filter/filter-i.service";
import { FilterService } from "@core/services/filter/filter.service";
import { SubscriptionServiceToken } from "@core/services/subscription/subscription-i.service";
import { SubscriptionService } from "@core/services/subscription/subscription.service";

export const restServices = [
  { provide: FilterServiceToken, useClass: FilterService },
  { provide: SubscriptionServiceToken, useClass: SubscriptionService },
  { provide: BookServiceToken, useClass: BookService }
];
