function validPreOrder(arr) {
    function consistency(start, end, target) {
        for (let i = start; i <= end; i++) {
            if (arr[j] < target) {
                return false;
            }
        }
    }
    function checkPreOrder(start, end) {
        if (start === end) return true;
        if (arr[start + 1] > arr[start]){
            return consistency(start+2, end, arr[start]) && 
            checkpreorder(start+1, end);
        } else {
            for (let i = start; i <= end; i++) {
                if (arr[i] > arr[start]) {
                    var pivot = i;
                }
            }
            return consistency(pivot, end, arr[start]) && 
            (checkPreOrder(start+1, pivot-1) && checkPreOrder(pivot, end));
        }       
    }
    return checkPreOrder(0, arr.length-1);
}