Реакт тестовое:

Реализовать двухстраничное spa приложение, с роутингом(React Router v6).

1.  Страница с табличным, и постраничным отображением списка марок пива.
•  По выбору элемента таблицы осуществляется переход к детальному описанию пива - страница 2. 
•  Добавить возможность занести запись в избранное –
Первый столбец с кастомизацией содержимого в виде рисунка со звездочкой c состоянием: 
- в избранном; подсвечено/true 
- нет в избранном; звездочка неактивна /false;
В качестве хранилища «избранного» использовать localStorage;
значально хранилище избранного не содержит записей

2.  Страница с детальным описанием пива:
•  Детальное описание марки пива с изображением. 
•  Возможность добавить в избранное со страницы с детальным описанием пива.

Общие требования:
- при реализации, необходимо использовать ui-kit элементы (primereact (https://www.primefaces.org/primereact/));
- приложение должно содержать резиновую верстку приложения;
- расположение элементов на второй странице на свое усмотрение;

В качестве тестового api для реализации использовать - https://punkapi.com/documentation/v2

На доп. баллы :)
1*) Выполнить сохранение "избранного" используя useContext
2*) Дополнить приложение строгой типизацией и ESLint(применив модуль, соответствующий стилю написания компонент функциональный/классовый)
3*) Сконфигурировать и применить в качестве хранилища "избранного" Redux.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

React test:

Implement a two-page spa application with routing (React Router v6).

1. Page with tabular and page-by-page display of the list of beer brands.
• By selecting an element of the table, you go to the detailed description of beer - page 2.
• Add the ability to add an entry to favorites -
First column with content customization in the form of a picture with an asterisk with state:
- in favorites; highlighted/true
- not in favorites; asterisk is inactive /false;
Use localStorage as the "favorite" storage;
by default, the favorites store does not contain any records

2. Page with a detailed description of the beer:
• Detailed description of the brand of beer with a picture.
• Ability to add to favorites from the page with a detailed description of the beer.

General requirements:
- when implementing, it is necessary to use ui-kit elements (primereact (https://www.primefaces.org/primereact/));
- the application must contain a rubber layout of the application;
- arrangement of elements on the second page at your discretion;

As a test api for implementation use - https://punkapi.com/documentation/v2

For additional points :)
1*) Save "favorites" using useContext
2*) Supplement the application with strong typing and ESLint (using a module corresponding to the writing style of the functional/class component)
3*) Configure and use Redux "favorites" as a repository. 