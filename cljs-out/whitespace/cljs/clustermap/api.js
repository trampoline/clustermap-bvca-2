// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,ch,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,ch);
}));
return ch;
});
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27274){var state_val_27275 = (state_27274[1]);if((state_val_27275 === 2))
{var inst_27272 = (state_27274[2]);var state_27274__$1 = state_27274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27274__$1,inst_27272);
} else
{if((state_val_27275 === 1))
{var inst_27270 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-company-sites");var state_27274__$1 = state_27274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,2,inst_27270);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27279 = [null,null,null,null,null,null,null];(statearr_27279[0] = state_machine__5507__auto__);
(statearr_27279[1] = 1);
return statearr_27279;
});
var state_machine__5507__auto____1 = (function (state_27274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27274);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27280){if((e27280 instanceof Object))
{var ex__5510__auto__ = e27280;var statearr_27281_27283 = state_27274;(statearr_27281_27283[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27284 = state_27274;
state_27274 = G__27284;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27282 = f__5522__auto__.call(null);(statearr_27282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27302){var state_val_27303 = (state_27302[1]);if((state_val_27303 === 2))
{var inst_27300 = (state_27302[2]);var state_27302__$1 = state_27302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27302__$1,inst_27300);
} else
{if((state_val_27303 === 1))
{var inst_27298 = clustermap.api.GET.call(null,"/api/bvca/all-constituencies");var state_27302__$1 = state_27302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27302__$1,2,inst_27298);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27307 = [null,null,null,null,null,null,null];(statearr_27307[0] = state_machine__5507__auto__);
(statearr_27307[1] = 1);
return statearr_27307;
});
var state_machine__5507__auto____1 = (function (state_27302){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27302);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27308){if((e27308 instanceof Object))
{var ex__5510__auto__ = e27308;var statearr_27309_27311 = state_27302;(statearr_27309_27311[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27312 = state_27302;
state_27302 = G__27312;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27302){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27310 = f__5522__auto__.call(null);(statearr_27310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27332){var state_val_27333 = (state_27332[1]);if((state_val_27333 === 2))
{var inst_27330 = (state_27332[2]);var state_27332__$1 = state_27332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27332__$1,inst_27330);
} else
{if((state_val_27333 === 1))
{var inst_27327 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_27328 = clustermap.api.GET.call(null,inst_27327);var state_27332__$1 = state_27332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27332__$1,2,inst_27328);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27337 = [null,null,null,null,null,null,null];(statearr_27337[0] = state_machine__5507__auto__);
(statearr_27337[1] = 1);
return statearr_27337;
});
var state_machine__5507__auto____1 = (function (state_27332){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27338){if((e27338 instanceof Object))
{var ex__5510__auto__ = e27338;var statearr_27339_27341 = state_27332;(statearr_27339_27341[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27342 = state_27332;
state_27332 = G__27342;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27332){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27340 = f__5522__auto__.call(null);(statearr_27340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27360){var state_val_27361 = (state_27360[1]);if((state_val_27361 === 2))
{var inst_27358 = (state_27360[2]);var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27360__$1,inst_27358);
} else
{if((state_val_27361 === 1))
{var inst_27356 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-companies-summary");var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27360__$1,2,inst_27356);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27365 = [null,null,null,null,null,null,null];(statearr_27365[0] = state_machine__5507__auto__);
(statearr_27365[1] = 1);
return statearr_27365;
});
var state_machine__5507__auto____1 = (function (state_27360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27366){if((e27366 instanceof Object))
{var ex__5510__auto__ = e27366;var statearr_27367_27369 = state_27360;(statearr_27367_27369[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27370 = state_27360;
state_27360 = G__27370;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27368 = f__5522__auto__.call(null);(statearr_27368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27390){var state_val_27391 = (state_27390[1]);if((state_val_27391 === 2))
{var inst_27388 = (state_27390[2]);var state_27390__$1 = state_27390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27390__$1,inst_27388);
} else
{if((state_val_27391 === 1))
{var inst_27385 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_27386 = clustermap.api.GET.call(null,inst_27385);var state_27390__$1 = state_27390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27390__$1,2,inst_27386);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27395 = [null,null,null,null,null,null,null];(statearr_27395[0] = state_machine__5507__auto__);
(statearr_27395[1] = 1);
return statearr_27395;
});
var state_machine__5507__auto____1 = (function (state_27390){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27396){if((e27396 instanceof Object))
{var ex__5510__auto__ = e27396;var statearr_27397_27399 = state_27390;(statearr_27397_27399[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27400 = state_27390;
state_27390 = G__27400;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27390){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27398 = f__5522__auto__.call(null);(statearr_27398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27420){var state_val_27421 = (state_27420[1]);if((state_val_27421 === 2))
{var inst_27418 = (state_27420[2]);var state_27420__$1 = state_27420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27420__$1,inst_27418);
} else
{if((state_val_27421 === 1))
{var inst_27415 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_27416 = clustermap.api.GET.call(null,inst_27415);var state_27420__$1 = state_27420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,2,inst_27416);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27425 = [null,null,null,null,null,null,null];(statearr_27425[0] = state_machine__5507__auto__);
(statearr_27425[1] = 1);
return statearr_27425;
});
var state_machine__5507__auto____1 = (function (state_27420){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object))
{var ex__5510__auto__ = e27426;var statearr_27427_27429 = state_27420;(statearr_27427_27429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27430 = state_27420;
state_27420 = G__27430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27420){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27428 = f__5522__auto__.call(null);(statearr_27428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
