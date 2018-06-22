# README

Chrome extension to show Shariah Compliant stocks in TradingView

# Getting the List

```
stocks = [];
$('.tablesorter-bootstrap.stocks').last().find('tbody').find('tr').each(function() {
    name = $(this).find('td').eq(0).attr('title');
    code = $(this).find('td').eq(1).text().trim();
    stocks.push({ code: code, name: name });   
    });

output = [];
for (s of stocks) { output.push(`{"code": "${s.code}", "name": "${s.name}"}`) }
console.log(`[${output.join(',')}]`)

// JS beautifier: https://www.prettifyjs.net/
```


# Source

https://www.klsescreener.com/v2/
