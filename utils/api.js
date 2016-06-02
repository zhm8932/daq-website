/**
 * Created by James on 16/4/9.
 */

module.exports = {

    Login: "daq.user.admin.login",

    UserDetailPage: "daq.user.detail.page",
    UserDetailGet: "daq.user.detail.get",
    AccountStatusChange: "daq.user.accountStatus.change",

    QueryDictionaryListByTypeAndLevel: "dictionary.queryDictionaryListByTypeAndLevel",
    QueryDictionaryTreeByType: "dictionary.queryDictionaryTreeByType",

    DictInsert: "dictionary.insertDict",
    DictUpdate: "dictionary.updateDictById",
    DictDelete: "dictionary.deleteDictByIdBatch",

    BannerFetch: "cms.banner.selectBannerByCategory",
    BannerAdd: "cms.banner.add",
    BannerUpdate: "cms.banner.update",
    BannerDetail: "cms.banner.selectBannerById",
    BannerDelete: "cms.banner.delBanner",

    ArticleDetail: "cms.article.queryArticleById",
    ArticleQuery: "pageQueryArticleByTitleOrContentAndCat",
    ArticleTerminate: "cms.article.delete",
    ArticleCreate: "cms.article.add",
    ArticleChange: "cms.article.update",
    ArticleSearch: "cms.article.pageQueryArticleByTitleOrContent",
    ArticlPageQueryArticleByCategory: "cms.article.pageQueryArticleByCategory",

    GoodsStateChange: "domain.goods.changeGoodsState",
    GoodsPriorityChange: "domain.goods.changeGoodsPriority",
    GoodsQuery: "domain.goods.goodsQueryFacade",
    GoodsDetail: "domain.goods.findGoodsById",
    GoodsCreate: "domain.goods.createGoods",
    GoodsChange: "domain.goods.changeGoods",

    ReservationPageSimpleInfo: "reservation.pageSimpleInfo",
    ReservationQuery: "reservation.queryReservation",
    ReservationTrace: "reservation.queryReservationTrace",

    FileWebToken: "file.webToken",

    //医生
    DoctorAdd: 'daq.doctor.add',
    DoctorPage: 'daq.medical.doctor.page',
    DoctorGet: 'daq.medical.doctor.get',
    DoctorUpdate: 'medical.doctor.update',
    HospitalPage: 'medical.hospital.page',
    HospitalGet: 'medical.hospital.get',
    HospitalAll: 'medical.hospital.all.list',
    HospitalUpdate: 'medical.hospital.update',
    HospitalOperatingStateUpdate: 'medical.hospital.operatingState.update',
    DepartmentAll: 'medical.department.all.list',

    PageQueryCoupon: 'promotion.pageQueryCoupon',


    //角色管理
    RoleQuery: '',
    RoleCreate: '',
    RoleChange: '',
    RoleDel: '',

    //权限管理
    AuthorityQuery: '',
    AuthorityCreate: '',
    AuthorityChange: '',
    AuthorityDel: '',

    //用户管理
    UserQuery: '',
    UserCreate: '',
    UserChange: '',
    UserDel: '',

    //菜单管理
    MenuQuery: 'security.resource.menu.tree',
    MenuCreate: '',
    MenuChange: '',
    MenuDel: '',

    //url管理
    UrlQuery: '',
    UrlCreate: '',
    UrlChange: '',
    UrlDel: '',

    //元素管理
    ElementQuery: '',
    ElementCreate: '',
    ElementChange: '',
    ElementDel: '',


    InsertCoupon: 'promotion.insertCoupon',
    SelectCouponById: 'promotion.selectCouponById',
    UpdateCouponById: 'promotion.updateCouponById',

    //预约查询
    ReservationGroupInfo: 'pagingQuerReservationGroupInfo',
    updapteReservationGroupStorage: 'updapteReservationGroupStorage',
    getReservationInfo: 'selectReservationGroupIdInfo',
    selectTracesByReservationId: 'selectTracesByReservationId',
    UpdateReservationGroupStatus: 'updateReservationGroupStatus',
    PagingQuerNurseDtoInfo: 'pagingQuerNurseDtoInfo',
    cancelReservationGroup: 'cancelReservationGroup',

    //webIM
    MessageHistory: "pagingQueryMessageHistory",


    //购物车
    GetCartList: "trade.getAllCartItemDTO",
    AddCartItem: "trade.addCartItem",
    DelCartItem: "trade.removeCartItemById",
    GetCouponList: "promotion.pageQueryUserCoupon",
    AddCouponByInvite: "promotion.addCouponCodeByInviteCode",
    CreateOrder: "domain.order.create",

    //字典
    GetListByTypeAndLevel: "dictionary.queryDictionaryListByTypeAndLevel",
    GetListByParentId: "dictionary.queryDictionaryListByParentId"

};