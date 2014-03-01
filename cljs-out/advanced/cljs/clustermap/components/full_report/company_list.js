// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs22790 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22790))
{return React.DOM.div(sablono.interpreter.attributes(attrs22790),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22790),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22799){var map__22814 = p__22799;var map__22814__$1 = ((cljs.core.seq_QMARK_(map__22814))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22814):map__22814);var opts = map__22814__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22814__$1,cljs.core.constant$keyword$341);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22814__$1,cljs.core.constant$keyword$358);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,company) : path_fn.call(null,cljs.core.constant$keyword$338,company));if(typeof clustermap.components.full_report.company_list.t22815 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22815 = (function (company_path,link_fn,path_fn,opts,map__22814,p__22799,owner,company,portfolio_company,meta22816){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22814 = map__22814;
this.p__22799 = p__22799;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22816 = meta22816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22815.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22815.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22815";
clustermap.components.full_report.company_list.t22815.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22815");
});
clustermap.components.full_report.company_list.t22815.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22815.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22818 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$338,self__.company));if(cljs.core.map_QMARK_(attrs22818))
{return React.DOM.td(sablono.interpreter.attributes(attrs22818),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22818));
}
})(),(function (){var attrs22819 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$339,cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22819))
{return React.DOM.td(sablono.interpreter.attributes(attrs22819),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22819));
}
})(),(function (){var attrs22820 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$340,(function (){var G__22827 = self__.company;var G__22827__$1 = (((G__22827 == null))?null:cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(G__22827));var G__22827__$2 = (((G__22827__$1 == null))?null:cljs.core.filter(((function (G__22827,G__22827__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22827,G__22827__$1))
,G__22827__$1));return G__22827__$2;
})());if(cljs.core.map_QMARK_(attrs22820))
{return React.DOM.td(sablono.interpreter.attributes(attrs22820),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22820));
}
})(),(function (){var attrs22821 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs22821))
{return React.DOM.td(sablono.interpreter.attributes(attrs22821),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22821),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22822 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22822))
{return React.DOM.td(sablono.interpreter.attributes(attrs22822),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22822));
}
})(),(function (){var attrs22823 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs22823))
{return React.DOM.td(sablono.interpreter.attributes(attrs22823),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22823));
}
})(),(function (){var attrs22824 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$400.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$400.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs22824))
{return React.DOM.td(sablono.interpreter.attributes(attrs22824),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22824),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22825 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$401.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22825))
{return React.DOM.td(sablono.interpreter.attributes(attrs22825),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22825));
}
})(),(function (){var attrs22826 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$401.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$401.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs22826))
{return React.DOM.td(sablono.interpreter.attributes(attrs22826),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22826));
}
})());
});
clustermap.components.full_report.company_list.t22815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22817){var self__ = this;
var _22817__$1 = this;return self__.meta22816;
});
clustermap.components.full_report.company_list.t22815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22817,meta22816__$1){var self__ = this;
var _22817__$1 = this;return (new clustermap.components.full_report.company_list.t22815(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22814,self__.p__22799,self__.owner,self__.company,self__.portfolio_company,meta22816__$1));
});
clustermap.components.full_report.company_list.__GT_t22815 = (function __GT_t22815(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22814__$2,p__22799__$1,owner__$1,company__$1,portfolio_company__$1,meta22816){return (new clustermap.components.full_report.company_list.t22815(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22814__$2,p__22799__$1,owner__$1,company__$1,portfolio_company__$1,meta22816));
});
}
return (new clustermap.components.full_report.company_list.t22815(company_path,link_fn,path_fn,opts,map__22814__$1,p__22799,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$342);if(typeof clustermap.components.full_report.company_list.t22848 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22848 = (function (comm,opts,owner,companies,company_list,meta22849){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22849 = meta22849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22848.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22848.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22848";
clustermap.components.full_report.company_list.t22848.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22848");
});
clustermap.components.full_report.company_list.t22848.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22848.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs22851 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$402);if(cljs.core.map_QMARK_(attrs22851))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs22851], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22852 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Portfolio Company",cljs.core.constant$keyword$315);if(cljs.core.map_QMARK_(attrs22852))
{return React.DOM.th(sablono.interpreter.attributes(attrs22852),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22852));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22857 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Revenue",cljs.core.constant$keyword$291);if(cljs.core.map_QMARK_(attrs22857))
{return React.DOM.th(sablono.interpreter.attributes(attrs22857),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22857));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Rev. change",cljs.core.constant$keyword$399))),(function (){var attrs22858 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Employees",cljs.core.constant$keyword$400);if(cljs.core.map_QMARK_(attrs22858))
{return React.DOM.th(sablono.interpreter.attributes(attrs22858),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22858));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Emp. change",cljs.core.constant$keyword$401))))),(function (){var attrs22859 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$331,cljs.core.constant$keyword$359,cljs.core.constant$keyword$332,self__.opts], null));if(cljs.core.map_QMARK_(attrs22859))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22859),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22859));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$402)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs22851),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22860 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Portfolio Company",cljs.core.constant$keyword$315);if(cljs.core.map_QMARK_(attrs22860))
{return React.DOM.th(sablono.interpreter.attributes(attrs22860),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22860));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22865 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Revenue",cljs.core.constant$keyword$291);if(cljs.core.map_QMARK_(attrs22865))
{return React.DOM.th(sablono.interpreter.attributes(attrs22865),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22865));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Rev. change",cljs.core.constant$keyword$399))),(function (){var attrs22866 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Employees",cljs.core.constant$keyword$400);if(cljs.core.map_QMARK_(attrs22866))
{return React.DOM.th(sablono.interpreter.attributes(attrs22866),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22866));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$402,"Emp. change",cljs.core.constant$keyword$401))))),(function (){var attrs22867 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$331,cljs.core.constant$keyword$359,cljs.core.constant$keyword$332,self__.opts], null));if(cljs.core.map_QMARK_(attrs22867))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22867),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22867));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$402)));
}
});
clustermap.components.full_report.company_list.t22848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22850){var self__ = this;
var _22850__$1 = this;return self__.meta22849;
});
clustermap.components.full_report.company_list.t22848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22850,meta22849__$1){var self__ = this;
var _22850__$1 = this;return (new clustermap.components.full_report.company_list.t22848(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta22849__$1));
});
clustermap.components.full_report.company_list.__GT_t22848 = (function __GT_t22848(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22849){return (new clustermap.components.full_report.company_list.t22848(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22849));
});
}
return (new clustermap.components.full_report.company_list.t22848(comm,opts,owner,companies,company_list,null));
});
