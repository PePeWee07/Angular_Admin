/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
export function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
export function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWwtY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi91dGlscy9jYW1lbC1jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBVztJQUNuQywwQ0FBMEM7SUFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMseUNBQXlDO0lBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlDLGtEQUFrRDtJQUNsRCxHQUFHLEdBQUcsR0FBRztTQUNOLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUM7U0FDdkMsSUFBSSxFQUFFO1NBQ04sV0FBVyxFQUFFLENBQUM7SUFFakIscURBQXFEO0lBQ3JELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmdzIGZyb20gc29tZXRoaW5nIHRvIGNhbWVsIGNhc2VcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0MjUyODcvY29udmVydC1kYXNoLXNlcGFyYXRlZC1zdHJpbmctdG8tY2FtZWxjYXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVycyB3aXRoIGEgc3BhY2VcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJyAnKTtcbiAgLy8gcHV0IGEgc3BhY2UgYmVmb3JlIGFuIHVwcGVyY2FzZSBsZXR0ZXJcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyhbYS16XSg/PVtBLVpdKSkvZywgJyQxICcpO1xuXG4gIC8vIExvd2VyIGNhc2UgZmlyc3QgY2hhcmFjdGVyIGFuZCBzb21lIG90aGVyIHN0dWZmXG4gIHN0ciA9IHN0clxuICAgIC5yZXBsYWNlKC8oW15hLXpBLVowLTkgXSl8XlswLTldKy9nLCAnJylcbiAgICAudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gdXBwZXJjYXNlIGNoYXJhY3RlcnMgcHJlY2VkZWQgYnkgYSBzcGFjZSBvciBudW1iZXJcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyhbIDAtOV0rKShbYS16QS1aXSkvZywgZnVuY3Rpb24oYSwgYiwgYykge1xuICAgIHJldHVybiBiLnRyaW0oKSArIGMudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmdzIGZyb20gY2FtZWwgY2FzZSB0byB3b3Jkc1xuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjI1NDA3L2NvbnZlcnQtY2FtZWxjYXNldGV4dC10by1jYW1lbC1jYXNlLXRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlQ2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIG1hdGNoID0+IGAgJHttYXRjaH1gKS5yZXBsYWNlKC9eLi8sIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xufVxuIl19