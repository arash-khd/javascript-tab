# javascript-tab
this is realy easy to make tab with my codes
all you need is

1. create main div with your anyname you like
```html
<div class="tab"></div>
```
2.inside tab class we create a div named tab-bar for head of tab (tab vertical menu items), you should use this name  exactly

```html
<div class="tab">
<div class="tab-bar"></div>
</div>
```
3.inside tab-bar we add our values for vertical menu , you should use span

```html
<div class="tab">
<div class="tab-bar">
<span>week</span>
<span>month</span>
<span>year</span>
<span>all</span>
</div>
</div>
```
4. after tab-bar class we working on tab contents , so we add class with tab-content name and put anything we want on that , tab-content class can be on ul or div or ...
**the count of span and tab-bar content should be equal ,**  
**create a class name active and give it display block , and give a display none to tab-conetnt class in your styles then give active class to your first tab-content class the result should hide all of tab-content class except the first one**
```css
.tab-content {
display : none;
}
.active {
display :block;
}

```
```html

   <div class="tab">
        <div class="tab-bar">
            <!--tab bar-->
            <span>هفته</span>
            <span>ماه</span>
            <span>سال</span>
            <span>ماه</span>
            <!--end of tab bar-->

        </div>
        <!--contnet-->
        <ul class="tab-content active">
            <li>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم1</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم1</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم1</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم1</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم1</a>
            </li>
        </ul>
        <ul class="tab-content">
            <li>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دار2</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دار2</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دار2</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم2</a>
            </li>
        </ul>
        <ul class="tab-content">
            <li>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم3</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم3</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم3</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم3</a>
            </li>
        </ul>
        <ul class="tab-content">
            <li>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم4</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم4</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم4</a>
                <a href="">دانلود آهنگ جدید امین فرزان به نام دوست دارم4</a>
            </li>
        </ul>
        <!--end contnet-->
    </div>
 
