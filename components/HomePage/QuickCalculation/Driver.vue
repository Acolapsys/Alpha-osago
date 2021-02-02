<template>
  <div class="diver">
    <div class="header">
      <div class="title">
        Водитель 1
      </div>
      <span>Удалить водителя</span>
    </div>
    <div class="kbm">
      <input id="know_kbm" type="radio" name="know_kbm">
      <label for="know_kbm">Знаю КБМ</label>
    </div>
    <div class="grid grid-cols-3 grid-rows-2">
      <div class="col">
        <label for="second-name">Фамилия</label>
        <input name="second-name" type="text" placeholder="Васильев">
      </div>
      <div class="col">
        <label for="first-name">Имя</label>
        <input name="first-name" type="text" placeholder="Иван">
      </div>
      <div class="col">
        <label for="third-name">Отчество</label>
        <input name="third-name" type="text" placeholder="Николаевич">
      </div>
      <div class="col">
        <label for="birthday">Дата рождения</label>
        <input name="second-name" type="date" placeholder="10.10.1990">
      </div>
      <div class="col">
        <label for="license">Серия и номер прав</label>
        <input name="license" type="text" placeholder="Васильев">
      </div>
      <div class="col">
        <label for="experience-date">Дата начала стажа</label>
        <input name="second-name" type="text" placeholder="10.10.2010">
      </div>
    </div>
  </div>
</template>
