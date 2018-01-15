var app = new Vue({
    el: '#page',
    data: {
        lang: 'Java',
        langClass: {'language-java': true},
        langName: 'java',
        code: `import java.time.*;

public class HackingDate {
    public static void main(String[] args) {
        LocalDate currentDate = LocalDate.now();
        System.out.println(currentDate);
    }
}`,
        desc: 'James Gosling 任职 Sun 公司期间发明了 Java，于 1995 年 5 月发布。Java 是使用程度最为广泛、也是目前使用人数最多的编程语言，广泛应用于企业级 Web 应用开发和移动应用开发，拥有跨平台、面向对象、泛型编程、函数式编程等特性。'
    },
    methods: {
        updateCode: function() {
            var code = document.getElementById('codeBox').value;

            var newLine = code.indexOf('\n');
            this.langName = code.substr(0, newLine);
            this.code = code.substr(newLine + 1);
            document.getElementById('code').innerHTML = this.code;
            var prism = document.createElement('script');
            prism.src = 'js/prism.js';
            document.body.appendChild(prism);
        },
        share: function() {

        }
    }
});

var eventMethod = window.addEventListener
        ? "addEventListener"
        : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod === "attachEvent"
    ? "onmessage"
    : "message";
eventer(messageEvent, function (e) {
    var id = e.data || e.message;
    if (typeof id !== 'string') {
        return;
    }
    window.location.href = '/show?' + id;
});