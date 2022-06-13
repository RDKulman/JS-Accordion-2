# JS-Accordion-2

Пример использования аккордеона в качестве элемента блока FAQ.
По умолчанию внутренняя часть аккордеона, содержащая информация, скрыта. Её свойство max-height имеет значение 0.
При клике аккордеон получает активный класс и его внутренняя часть раскрывается.  Значением max-height для скрытого элемента становится значение его scrollHeight.

Реализована функция изменения max-height скрытого элемента при изменении размера окна браузера.  Если текущий размер max-height не совпадает со значением scrollHeight, то значение max-height обновляется и становится равным значению scrollHeight раскрытого скрытого элемента.

Кроме того, используются ариа-атрибуты для работы скринридера. 




An example of using an accordion as an element of the FAQ block.
By default, the inside of the accordion containing the information is hidden. Its max-height property has the value 0.
When clicked, the accordion gets an active class and its inner part is revealed.  The max-height value for the hidden element becomes its scrollHeight value.

Implemented the function of changing the max-height of the hidden element when changing the size of the browser window.  If the current max-height size does not match the scrollHeight value, then the max-height value is updated and becomes equal to the scrollHeight value of the expanded hidden element.

In addition, aria attributes are used for the operation of the screen reader.
