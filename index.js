//Маппер

    const our = "accepted";
let outer;

switch (our) {
    case 'approved':
        outer = `approved`;
        break;
    case 'pending':
    case 'moderation':
    case 'waiting':
            outer = `pending`;
        break;
    case 'declined':
    case 'rejected':
    case 'notaccepted':
        outer = `declined`;
        break;
    default:
        outer = 'pending';
        break;
}
console.log(outer)


