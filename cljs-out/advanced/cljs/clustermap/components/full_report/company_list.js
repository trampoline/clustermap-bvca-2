// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs22373 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22373))
{return React.DOM.div(sablono.interpreter.attributes(attrs22373),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22373),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(site,owner,p__22382){var map__22398 = p__22382;var map__22398__$1 = ((cljs.core.seq_QMARK_(map__22398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22398):map__22398);var opts = map__22398__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22398__$1,cljs.core.constant$keyword$320);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22398__$1,cljs.core.constant$keyword$321);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,site) : path_fn.call(null,cljs.core.constant$keyword$310,site));if(typeof clustermap.components.full_report.company_list.t22399 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22399 = (function (company_path,link_fn,path_fn,opts,map__22398,p__22382,owner,site,portfolio_company,meta22400){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22398 = map__22398;
this.p__22382 = p__22382;
this.owner = owner;
this.site = site;
this.portfolio_company = portfolio_company;
this.meta22400 = meta22400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22399.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22399.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22399";
clustermap.components.full_report.company_list.t22399.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22399");
});
clustermap.components.full_report.company_list.t22399.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22399.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22402 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$310,self__.site));if(cljs.core.map_QMARK_(attrs22402))
{return React.DOM.td(sablono.interpreter.attributes(attrs22402),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22402));
}
})(),(function (){var attrs22403 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22403))
{return React.DOM.td(sablono.interpreter.attributes(attrs22403),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22403));
}
})(),(function (){var attrs22404 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$311,cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22404))
{return React.DOM.td(sablono.interpreter.attributes(attrs22404),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22404));
}
})(),(function (){var attrs22405 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$312,(function (){var G__22412 = self__.site;var G__22412__$1 = (((G__22412 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22412));var G__22412__$2 = (((G__22412__$1 == null))?null:cljs.core.filter(((function (G__22412,G__22412__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22412,G__22412__$1))
,G__22412__$1));return G__22412__$2;
})());if(cljs.core.map_QMARK_(attrs22405))
{return React.DOM.td(sablono.interpreter.attributes(attrs22405),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22405));
}
})(),(function (){var attrs22406 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22406))
{return React.DOM.td(sablono.interpreter.attributes(attrs22406),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22406),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22407 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22407))
{return React.DOM.td(sablono.interpreter.attributes(attrs22407),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22407));
}
})(),(function (){var attrs22408 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22408))
{return React.DOM.td(sablono.interpreter.attributes(attrs22408),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22408));
}
})(),(function (){var attrs22409 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22409))
{return React.DOM.td(sablono.interpreter.attributes(attrs22409),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22409),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22410 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22410))
{return React.DOM.td(sablono.interpreter.attributes(attrs22410),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22410));
}
})(),(function (){var attrs22411 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22411))
{return React.DOM.td(sablono.interpreter.attributes(attrs22411),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22411));
}
})());
});
clustermap.components.full_report.company_list.t22399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22401){var self__ = this;
var _22401__$1 = this;return self__.meta22400;
});
clustermap.components.full_report.company_list.t22399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22401,meta22400__$1){var self__ = this;
var _22401__$1 = this;return (new clustermap.components.full_report.company_list.t22399(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22398,self__.p__22382,self__.owner,self__.site,self__.portfolio_company,meta22400__$1));
});
clustermap.components.full_report.company_list.__GT_t22399 = (function __GT_t22399(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22398__$2,p__22382__$1,owner__$1,site__$1,portfolio_company__$1,meta22400){return (new clustermap.components.full_report.company_list.t22399(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22398__$2,p__22382__$1,owner__$1,site__$1,portfolio_company__$1,meta22400));
});
}
return (new clustermap.components.full_report.company_list.t22399(company_path,link_fn,path_fn,opts,map__22398__$1,p__22382,owner,site,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites_by_company,owner,opts){if(typeof clustermap.components.full_report.company_list.t22419 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22419 = (function (opts,owner,selection_portfolio_company_sites_by_company,company_list,meta22420){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites_by_company = selection_portfolio_company_sites_by_company;
this.company_list = company_list;
this.meta22420 = meta22420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22419.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22419.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22419";
clustermap.components.full_report.company_list.t22419.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22419");
});
clustermap.components.full_report.company_list.t22419.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22419.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22424 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites_by_company),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$303,cljs.core.constant$keyword$327,cljs.core.constant$keyword$304,self__.opts], null));if(cljs.core.map_QMARK_(attrs22424))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22424),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22424));
}
})())));
});
clustermap.components.full_report.company_list.t22419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22421){var self__ = this;
var _22421__$1 = this;return self__.meta22420;
});
clustermap.components.full_report.company_list.t22419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22421,meta22420__$1){var self__ = this;
var _22421__$1 = this;return (new clustermap.components.full_report.company_list.t22419(self__.opts,self__.owner,self__.selection_portfolio_company_sites_by_company,self__.company_list,meta22420__$1));
});
clustermap.components.full_report.company_list.__GT_t22419 = (function __GT_t22419(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta22420){return (new clustermap.components.full_report.company_list.t22419(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta22420));
});
}
return (new clustermap.components.full_report.company_list.t22419(opts,owner,selection_portfolio_company_sites_by_company,company_list,null));
});
