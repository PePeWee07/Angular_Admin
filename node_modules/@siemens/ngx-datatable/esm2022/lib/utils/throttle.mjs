/**
 * Throttle a function
 */
export function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
export function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvdXRpbHMvdGhyb3R0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVMsRUFBRSxJQUFZLEVBQUUsT0FBYTtJQUM3RCxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4QixJQUFJLE9BQVksQ0FBQztJQUNqQixJQUFJLElBQVMsQ0FBQztJQUNkLElBQUksTUFBVyxDQUFDO0lBQ2hCLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQztJQUN4QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFakIsU0FBUyxLQUFLO1FBQ1osUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVqQixJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUNqRCxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFnQixFQUFFLE9BQWE7SUFDMUQsT0FBTyxTQUFTLGNBQWMsQ0FBQyxNQUFXLEVBQUUsR0FBZ0IsRUFBRSxVQUE4QjtRQUMxRixPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLE1BQU07Z0JBQ2xCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7aUJBQ3JELENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRocm90dGxlIGEgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmM6IGFueSwgd2FpdDogbnVtYmVyLCBvcHRpb25zPzogYW55KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgY29udGV4dDogYW55O1xuICBsZXQgYXJnczogYW55O1xuICBsZXQgcmVzdWx0OiBhbnk7XG4gIGxldCB0aW1lb3V0OiBhbnkgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuXG4gIGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiArbmV3IERhdGUoKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IGFueSkge1xuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICB9XG5cbiAgICBjb25zdCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIFRocm90dGxlIGRlY29yYXRvclxuICpcbiAqICBjbGFzcyBNeUNsYXNzIHtcbiAqICAgIHRocm90dGxlYWJsZSgxMClcbiAqICAgIG15Rm4oKSB7IC4uLiB9XG4gKiAgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVhYmxlKGR1cmF0aW9uOiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlubmVyRGVjb3JhdG9yKHRhcmdldDogYW55LCBrZXk6IFByb3BlcnR5S2V5LCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiB0aHJvdHRsZShkZXNjcmlwdG9yLnZhbHVlLCBkdXJhdGlvbiwgb3B0aW9ucylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIl19