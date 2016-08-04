/**
 * Created by James on 16/4/9.
 */

module.exports = {

    Login: "daq.user.admin.login",
    UserWebLogin: "daq.user.web.login",
    SmsSendVerCode:'daq.sms.sendVerCode',

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
    BannerSelectBannerClientByCategory:'cms.banner.selectBannerClientByCategory',

    ArticleDetail: "cms.article.queryArticleById",
    ArticleQuery: "pageQueryArticleByTitleOrContentAndCat",
    ArticleTerminate: "cms.article.delete",
    ArticleCreate: "cms.article.add",
    ArticleChange: "cms.article.update",
    ArticleSearch: "cms.article.pageQueryArticleByTitleOrContent",
    ArticlPageQueryArticleByCategory: "cms.article.pageQueryArticleByCategory",
    ArticleQueryArticleByIdBatch:'cms.article.queryArticleByIdBatch',

    GoodsStateChange: "domain.goods.changeGoodsState",
    GoodsPriorityChange: "domain.goods.changeGoodsPriority",
    GoodsQuery: "domain.goods.goodsQueryFacade",
    GoodsDetail: "domain.goods.findGoodsById",
    GoodsFindGoodsByIdToPC: "domain.goods.findGoodsByIdToPC",
    GoodsFindGoodsByIdToMobile: "domain.goods.findGoodsByIdToMobile",
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
    GetCartCount: "trade.selectMyCartItemCount",
    AddCartItem: "trade.addCartItem",
    DelCartItem: "trade.removeCartItemById",
    DelCartItemBatch: "trade.removeCartItemByIdBatch",
    GetCouponList: "promotion.getAllUserCoupon",
    AddCouponByInvite: "promotion.addCouponCodeByInviteCode",

    //订单
    CreateOrder: "trade.order.create",
    GetOrderList: "trade.order.mypage",
    GetPayId: "trade.createTransAndPrepay",
    OrderPay: "finance.pay.thirdparty",
    GetOrderDetail: "trade.order.get",
    CancelOrder: "trade.order.cancel",
    DeleteOrder: "trade.order.delete",


    //挂号
    GetRegsourceList: "daq.medical.doctor.schedule.detail.page",
    GetRegisterList: "his.reservation.get.byaccount",//我的挂号列表
    GetRegTimeSlot: "service.schedule.get.doctorIdWithDate.fromcrm",
    AddRegByDoc: "service.schedule.registering.fromcrm",
    DelRegister: "his.reservation.delete",
    CancelRegister: "his.reservation.cancel.fromcrm",
    GetRegDetail: "his.reservation.get.byid",


    //预约
    GetReservationList: "service.reservation.byuser",
    GetReserveDetail: "service.reservation.byid",

    //就诊人
    GetPatientList: "daq.contactPerson.list",
    AddPatient: "daq.contactPerson.add",
    DelPatient: "daq.contactPerson.delete",

    //账号
    GetAccountInfo: "daq.my.account.info",
    HasBindHis: "daq.user.hasBindHIS",
    CompleteAccount: "daq.user.bindHIS",

    //字典
    GetListByTypeAndLevel: "dictionary.queryDictionaryListByTypeAndLevel",
    GetListByParentId: "dictionary.queryDictionaryListByParentId",
    GetDetailByIds: "dictionary.selectDictByIdBatch"

};