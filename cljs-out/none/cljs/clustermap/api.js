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
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8332){var state_val_8333 = (state_8332[1]);if((state_val_8333 === 2))
{var inst_8330 = (state_8332[2]);var state_8332__$1 = state_8332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8332__$1,inst_8330);
} else
{if((state_val_8333 === 1))
{var inst_8328 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-company-sites");var state_8332__$1 = state_8332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8332__$1,2,inst_8328);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8337 = [null,null,null,null,null,null,null];(statearr_8337[0] = state_machine__5507__auto__);
(statearr_8337[1] = 1);
return statearr_8337;
});
var state_machine__5507__auto____1 = (function (state_8332){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8338){if((e8338 instanceof Object))
{var ex__5510__auto__ = e8338;var statearr_8339_8341 = state_8332;(statearr_8339_8341[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8342 = state_8332;
state_8332 = G__8342;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8332){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8340 = f__5522__auto__.call(null);(statearr_8340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8360){var state_val_8361 = (state_8360[1]);if((state_val_8361 === 2))
{var inst_8358 = (state_8360[2]);var state_8360__$1 = state_8360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8360__$1,inst_8358);
} else
{if((state_val_8361 === 1))
{var inst_8356 = clustermap.api.GET.call(null,"/api/bvca/all-constituencies");var state_8360__$1 = state_8360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8360__$1,2,inst_8356);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8365 = [null,null,null,null,null,null,null];(statearr_8365[0] = state_machine__5507__auto__);
(statearr_8365[1] = 1);
return statearr_8365;
});
var state_machine__5507__auto____1 = (function (state_8360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8366){if((e8366 instanceof Object))
{var ex__5510__auto__ = e8366;var statearr_8367_8369 = state_8360;(statearr_8367_8369[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8370 = state_8360;
state_8360 = G__8370;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8368 = f__5522__auto__.call(null);(statearr_8368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8390){var state_val_8391 = (state_8390[1]);if((state_val_8391 === 2))
{var inst_8388 = (state_8390[2]);var state_8390__$1 = state_8390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8390__$1,inst_8388);
} else
{if((state_val_8391 === 1))
{var inst_8385 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_8386 = clustermap.api.GET.call(null,inst_8385);var state_8390__$1 = state_8390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8390__$1,2,inst_8386);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8395 = [null,null,null,null,null,null,null];(statearr_8395[0] = state_machine__5507__auto__);
(statearr_8395[1] = 1);
return statearr_8395;
});
var state_machine__5507__auto____1 = (function (state_8390){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8396){if((e8396 instanceof Object))
{var ex__5510__auto__ = e8396;var statearr_8397_8399 = state_8390;(statearr_8397_8399[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8400 = state_8390;
state_8390 = G__8400;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8390){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8398 = f__5522__auto__.call(null);(statearr_8398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8418){var state_val_8419 = (state_8418[1]);if((state_val_8419 === 2))
{var inst_8416 = (state_8418[2]);var state_8418__$1 = state_8418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8418__$1,inst_8416);
} else
{if((state_val_8419 === 1))
{var inst_8414 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-companies-summary");var state_8418__$1 = state_8418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8418__$1,2,inst_8414);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8423 = [null,null,null,null,null,null,null];(statearr_8423[0] = state_machine__5507__auto__);
(statearr_8423[1] = 1);
return statearr_8423;
});
var state_machine__5507__auto____1 = (function (state_8418){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8424){if((e8424 instanceof Object))
{var ex__5510__auto__ = e8424;var statearr_8425_8427 = state_8418;(statearr_8425_8427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8428 = state_8418;
state_8418 = G__8428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8418){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8426 = f__5522__auto__.call(null);(statearr_8426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8448){var state_val_8449 = (state_8448[1]);if((state_val_8449 === 2))
{var inst_8446 = (state_8448[2]);var state_8448__$1 = state_8448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8448__$1,inst_8446);
} else
{if((state_val_8449 === 1))
{var inst_8443 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_8444 = clustermap.api.GET.call(null,inst_8443);var state_8448__$1 = state_8448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8448__$1,2,inst_8444);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8453 = [null,null,null,null,null,null,null];(statearr_8453[0] = state_machine__5507__auto__);
(statearr_8453[1] = 1);
return statearr_8453;
});
var state_machine__5507__auto____1 = (function (state_8448){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8454){if((e8454 instanceof Object))
{var ex__5510__auto__ = e8454;var statearr_8455_8457 = state_8448;(statearr_8455_8457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8458 = state_8448;
state_8448 = G__8458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8448){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8456 = f__5522__auto__.call(null);(statearr_8456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8478){var state_val_8479 = (state_8478[1]);if((state_val_8479 === 2))
{var inst_8476 = (state_8478[2]);var state_8478__$1 = state_8478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8478__$1,inst_8476);
} else
{if((state_val_8479 === 1))
{var inst_8473 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_8474 = clustermap.api.GET.call(null,inst_8473);var state_8478__$1 = state_8478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8478__$1,2,inst_8474);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8483 = [null,null,null,null,null,null,null];(statearr_8483[0] = state_machine__5507__auto__);
(statearr_8483[1] = 1);
return statearr_8483;
});
var state_machine__5507__auto____1 = (function (state_8478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8484){if((e8484 instanceof Object))
{var ex__5510__auto__ = e8484;var statearr_8485_8487 = state_8478;(statearr_8485_8487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8488 = state_8478;
state_8478 = G__8488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8486 = f__5522__auto__.call(null);(statearr_8486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=api.js.map