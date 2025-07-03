//Switch
/*Используя switch, напишите программу, которая по заданной роли пользователя выводит число - уровень его доступа

    1 Уровень - роли user и client
    2 Уровень - admin и manager
    3 Уровень - только superadmin*/

    const role = "superadmin";
let level;

switch (role) {
    case 'user':
    case 'client':
        level = 'Уровень 1';
        break;
    case 'admin':
    case 'manager':
        level = 'Уровень 2';
        break;
    case 'superadmin':
        level = 'Уровень 3';
        break;
    default:
        level = 'error input'
}
console.log(level)


