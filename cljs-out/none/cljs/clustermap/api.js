// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__46991){var map__46995 = p__46991;var map__46995__$1 = ((cljs.core.seq_QMARK_.call(null,map__46995))?cljs.core.apply.call(null,cljs.core.hash_map,map__46995):map__46995);var opts = map__46995__$1;var content = cljs.core.get.call(null,map__46995__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__46995__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__46995__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__46995,map__46995__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__46995,map__46995__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__46995,map__46995__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__46995,map__46995__$1,opts,content,method,raw))
,(function (){var or__3541__auto__ = (function (){var G__46997 = method;var G__46997__$1 = (((G__46997 == null))?null:cljs.core.name.call(null,G__46997));var G__46997__$2 = (((G__46997__$1 == null))?null:clojure.string.upper_case.call(null,G__46997__$1));return G__46997__$2;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__46991 = null;if (arguments.length > 1) {
  p__46991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__46991);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__46998){
var url = cljs.core.first(arglist__46998);
var p__46991 = cljs.core.rest(arglist__46998);
return AJAX__delegate(url,p__46991);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__46999){var map__47001 = p__46999;var map__47001__$1 = ((cljs.core.seq_QMARK_.call(null,map__47001))?cljs.core.apply.call(null,cljs.core.hash_map,map__47001):map__47001);var opts = map__47001__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__46999 = null;if (arguments.length > 1) {
  p__46999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__46999);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__47002){
var url = cljs.core.first(arglist__47002);
var p__46999 = cljs.core.rest(arglist__47002);
return GET__delegate(url,p__46999);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__47003){var map__47005 = p__47003;var map__47005__$1 = ((cljs.core.seq_QMARK_.call(null,map__47005))?cljs.core.apply.call(null,cljs.core.hash_map,map__47005):map__47005);var opts = map__47005__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__47003 = null;if (arguments.length > 2) {
  p__47003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__47003);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__47006){
var url = cljs.core.first(arglist__47006);
arglist__47006 = cljs.core.next(arglist__47006);
var content = cljs.core.first(arglist__47006);
var p__47003 = cljs.core.rest(arglist__47006);
return POST__delegate(url,content,p__47003);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__47007){var map__47009 = p__47007;var map__47009__$1 = ((cljs.core.seq_QMARK_.call(null,map__47009))?cljs.core.apply.call(null,cljs.core.hash_map,map__47009):map__47009);var opts = map__47009__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__47007 = null;if (arguments.length > 2) {
  p__47007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__47007);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__47010){
var url = cljs.core.first(arglist__47010);
arglist__47010 = cljs.core.next(arglist__47010);
var content = cljs.core.first(arglist__47010);
var p__47007 = cljs.core.rest(arglist__47010);
return PUT__delegate(url,content,p__47007);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_47143){var state_val_47144 = (state_47143[(1)]);if((state_val_47144 === (7)))
{var inst_47101 = (state_47143[(7)]);var inst_47100 = (state_47143[(2)]);var inst_47101__$1 = cljs.core.nth.call(null,inst_47100,(0),null);var inst_47102 = cljs.core.nth.call(null,inst_47100,(1),null);var inst_47103 = cljs.core.sequential_QMARK_.call(null,inst_47101__$1);var state_47143__$1 = (function (){var statearr_47145 = state_47143;(statearr_47145[(7)] = inst_47101__$1);
(statearr_47145[(8)] = inst_47102);
return statearr_47145;
})();if(inst_47103)
{var statearr_47146_47181 = state_47143__$1;(statearr_47146_47181[(1)] = (8));
} else
{var statearr_47147_47182 = state_47143__$1;(statearr_47147_47182[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (20)))
{var inst_47101 = (state_47143[(7)]);var state_47143__$1 = state_47143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47143__$1,(23),inst_47101);
} else
{if((state_val_47144 === (1)))
{var state_47143__$1 = state_47143;var statearr_47148_47183 = state_47143__$1;(statearr_47148_47183[(2)] = null);
(statearr_47148_47183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (4)))
{var state_47143__$1 = state_47143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47143__$1,(7),ocomm);
} else
{if((state_val_47144 === (15)))
{var inst_47123 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47149_47184 = state_47143__$1;(statearr_47149_47184[(2)] = inst_47123);
(statearr_47149_47184[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (21)))
{var state_47143__$1 = state_47143;var statearr_47150_47185 = state_47143__$1;(statearr_47150_47185[(2)] = null);
(statearr_47150_47185[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (13)))
{var inst_47106 = (state_47143[(9)]);var state_47143__$1 = state_47143;var statearr_47151_47186 = state_47143__$1;(statearr_47151_47186[(2)] = inst_47106);
(statearr_47151_47186[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (22)))
{var inst_47132 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47152_47187 = state_47143__$1;(statearr_47152_47187[(2)] = inst_47132);
(statearr_47152_47187[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (6)))
{var inst_47139 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47153_47188 = state_47143__$1;(statearr_47153_47188[(2)] = inst_47139);
(statearr_47153_47188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (17)))
{var state_47143__$1 = state_47143;var statearr_47154_47189 = state_47143__$1;(statearr_47154_47189[(2)] = null);
(statearr_47154_47189[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (3)))
{var inst_47141 = (state_47143[(2)]);var state_47143__$1 = state_47143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47143__$1,inst_47141);
} else
{if((state_val_47144 === (12)))
{var inst_47125 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47155_47190 = state_47143__$1;(statearr_47155_47190[(2)] = inst_47125);
(statearr_47155_47190[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (2)))
{var state_47143__$1 = state_47143;if(true)
{var statearr_47156_47191 = state_47143__$1;(statearr_47156_47191[(1)] = (4));
} else
{var statearr_47157_47192 = state_47143__$1;(statearr_47157_47192[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (23)))
{var inst_47129 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47158_47193 = state_47143__$1;(statearr_47158_47193[(2)] = inst_47129);
(statearr_47158_47193[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (19)))
{var inst_47116 = (state_47143[(2)]);var state_47143__$1 = state_47143;var statearr_47159_47194 = state_47143__$1;(statearr_47159_47194[(2)] = inst_47116);
(statearr_47159_47194[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (11)))
{var inst_47105 = (state_47143[(10)]);var inst_47108 = cljs.core.empty_QMARK_.call(null,inst_47105);var state_47143__$1 = state_47143;if(inst_47108)
{var statearr_47160_47195 = state_47143__$1;(statearr_47160_47195[(1)] = (13));
} else
{var statearr_47161_47196 = state_47143__$1;(statearr_47161_47196[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (9)))
{var inst_47101 = (state_47143[(7)]);var state_47143__$1 = state_47143;if(cljs.core.truth_(inst_47101))
{var statearr_47162_47197 = state_47143__$1;(statearr_47162_47197[(1)] = (20));
} else
{var statearr_47163_47198 = state_47143__$1;(statearr_47163_47198[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (5)))
{var state_47143__$1 = state_47143;var statearr_47164_47199 = state_47143__$1;(statearr_47164_47199[(2)] = null);
(statearr_47164_47199[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (14)))
{var inst_47105 = (state_47143[(10)]);var inst_47111 = cljs.core.rest.call(null,inst_47105);var inst_47112 = cljs.core.first.call(null,inst_47105);var state_47143__$1 = (function (){var statearr_47165 = state_47143;(statearr_47165[(11)] = inst_47111);
return statearr_47165;
})();if(cljs.core.truth_(inst_47112))
{var statearr_47166_47200 = state_47143__$1;(statearr_47166_47200[(1)] = (16));
} else
{var statearr_47167_47201 = state_47143__$1;(statearr_47167_47201[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (16)))
{var inst_47105 = (state_47143[(10)]);var inst_47114 = cljs.core.first.call(null,inst_47105);var state_47143__$1 = state_47143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47143__$1,(19),inst_47114);
} else
{if((state_val_47144 === (10)))
{var inst_47102 = (state_47143[(8)]);var inst_47134 = (state_47143[(2)]);var inst_47135 = cljs.core.apply.call(null,handler,inst_47134,inst_47102);var state_47143__$1 = (function (){var statearr_47168 = state_47143;(statearr_47168[(12)] = inst_47135);
return statearr_47168;
})();var statearr_47169_47202 = state_47143__$1;(statearr_47169_47202[(2)] = null);
(statearr_47169_47202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (18)))
{var inst_47106 = (state_47143[(9)]);var inst_47111 = (state_47143[(11)]);var inst_47119 = (state_47143[(2)]);var inst_47120 = cljs.core.conj.call(null,inst_47106,inst_47119);var inst_47105 = inst_47111;var inst_47106__$1 = inst_47120;var state_47143__$1 = (function (){var statearr_47170 = state_47143;(statearr_47170[(9)] = inst_47106__$1);
(statearr_47170[(10)] = inst_47105);
return statearr_47170;
})();var statearr_47171_47203 = state_47143__$1;(statearr_47171_47203[(2)] = null);
(statearr_47171_47203[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47144 === (8)))
{var inst_47101 = (state_47143[(7)]);var inst_47105 = inst_47101;var inst_47106 = cljs.core.PersistentVector.EMPTY;var state_47143__$1 = (function (){var statearr_47172 = state_47143;(statearr_47172[(9)] = inst_47106);
(statearr_47172[(10)] = inst_47105);
return statearr_47172;
})();var statearr_47173_47204 = state_47143__$1;(statearr_47173_47204[(2)] = null);
(statearr_47173_47204[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_47177 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47177[(0)] = state_machine__5677__auto__);
(statearr_47177[(1)] = (1));
return statearr_47177;
});
var state_machine__5677__auto____1 = (function (state_47143){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_47143);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e47178){if((e47178 instanceof Object))
{var ex__5680__auto__ = e47178;var statearr_47179_47205 = state_47143;(statearr_47179_47205[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47206 = state_47143;
state_47143 = G__47206;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_47143){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_47143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_47180 = f__5692__auto__.call(null);(statearr_47180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_47180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__47209__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__47208 = rseq;var rcomm = cljs.core.nth.call(null,vec__47208,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__47208,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__47209 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47209__delegate.call(this,req_args);};
G__47209.cljs$lang$maxFixedArity = 0;
G__47209.cljs$lang$applyTo = (function (arglist__47210){
var req_args = cljs.core.seq(arglist__47210);
return G__47209__delegate(req_args);
});
G__47209.cljs$core$IFn$_invoke$arity$variadic = G__47209__delegate;
return G__47209;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_47228){var state_val_47229 = (state_47228[(1)]);if((state_val_47229 === (2)))
{var inst_47225 = (state_47228[(2)]);var inst_47226 = console.log(inst_47225);var state_47228__$1 = state_47228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47228__$1,inst_47226);
} else
{if((state_val_47229 === (1)))
{var state_47228__$1 = state_47228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47228__$1,(2),ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_47233 = [null,null,null,null,null,null,null];(statearr_47233[(0)] = state_machine__5677__auto__);
(statearr_47233[(1)] = (1));
return statearr_47233;
});
var state_machine__5677__auto____1 = (function (state_47228){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_47228);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e47234){if((e47234 instanceof Object))
{var ex__5680__auto__ = e47234;var statearr_47235_47237 = state_47228;(statearr_47235_47237[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47238 = state_47228;
state_47228 = G__47238;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_47228){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_47228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_47236 = f__5692__auto__.call(null);(statearr_47236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_47236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__47239){
var f = cljs.core.first(arglist__47239);
var args = cljs.core.rest(arglist__47239);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__47242){var vec__47243 = p__47242;var k = cljs.core.nth.call(null,vec__47243,(0),null);var v = cljs.core.nth.call(null,vec__47243,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5691__auto___47270 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___47270,r){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___47270,r){
return (function (state_47261){var state_val_47262 = (state_47261[(1)]);if((state_val_47262 === (2)))
{var inst_47258 = (state_47261[(2)]);var inst_47259 = cljs.core.reset_BANG_.call(null,r,inst_47258);var state_47261__$1 = state_47261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47261__$1,inst_47259);
} else
{if((state_val_47262 === (1)))
{var state_47261__$1 = state_47261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47261__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto___47270,r))
;return ((function (switch__5676__auto__,c__5691__auto___47270,r){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_47266 = [null,null,null,null,null,null,null];(statearr_47266[(0)] = state_machine__5677__auto__);
(statearr_47266[(1)] = (1));
return statearr_47266;
});
var state_machine__5677__auto____1 = (function (state_47261){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_47261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e47267){if((e47267 instanceof Object))
{var ex__5680__auto__ = e47267;var statearr_47268_47271 = state_47261;(statearr_47268_47271[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47272 = state_47261;
state_47261 = G__47272;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_47261){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_47261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___47270,r))
})();var state__5693__auto__ = (function (){var statearr_47269 = f__5692__auto__.call(null);(statearr_47269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___47270);
return statearr_47269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___47270,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__47273){
var id = cljs.core.first(arglist__47273);
arglist__47273 = cljs.core.next(arglist__47273);
var tolerance = cljs.core.first(arglist__47273);
var opts = cljs.core.rest(arglist__47273);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__47274){
var id = cljs.core.first(arglist__47274);
var opts = cljs.core.rest(arglist__47274);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__47275){
var ids = cljs.core.first(arglist__47275);
arglist__47275 = cljs.core.next(arglist__47275);
var tolerance = cljs.core.first(arglist__47275);
var opts = cljs.core.rest(arglist__47275);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__47276){var map__47278 = p__47276;var map__47278__$1 = ((cljs.core.seq_QMARK_.call(null,map__47278))?cljs.core.apply.call(null,cljs.core.hash_map,map__47278):map__47278);var opts = map__47278__$1;var boundaryline_ids = cljs.core.get.call(null,map__47278__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__47276 = null;if (arguments.length > 3) {
  p__47276 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__47276);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__47279){
var collection_id = cljs.core.first(arglist__47279);
arglist__47279 = cljs.core.next(arglist__47279);
var tolerance = cljs.core.first(arglist__47279);
arglist__47279 = cljs.core.next(arglist__47279);
var bounds = cljs.core.first(arglist__47279);
var p__47276 = cljs.core.rest(arglist__47279);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__47276);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__47280){var vec__47282 = p__47280;var type_ids = cljs.core.nth.call(null,vec__47282,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__47280 = null;if (arguments.length > 6) {
  p__47280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__47280);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__47283){
var index = cljs.core.first(arglist__47283);
arglist__47283 = cljs.core.next(arglist__47283);
var type = cljs.core.first(arglist__47283);
arglist__47283 = cljs.core.next(arglist__47283);
var blcoll = cljs.core.first(arglist__47283);
arglist__47283 = cljs.core.next(arglist__47283);
var attr = cljs.core.first(arglist__47283);
arglist__47283 = cljs.core.next(arglist__47283);
var filter = cljs.core.first(arglist__47283);
arglist__47283 = cljs.core.next(arglist__47283);
var bounds = cljs.core.first(arglist__47283);
var p__47280 = cljs.core.rest(arglist__47283);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__47280);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__47284){var vec__47286 = p__47284;var type_ids = cljs.core.nth.call(null,vec__47286,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__47284 = null;if (arguments.length > 7) {
  p__47284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__47284);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__47287){
var index = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var type = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var location_attr = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var attrs = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var max_count = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var filter = cljs.core.first(arglist__47287);
arglist__47287 = cljs.core.next(arglist__47287);
var bounds = cljs.core.first(arglist__47287);
var p__47284 = cljs.core.rest(arglist__47287);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__47284);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__47288){var vec__47290 = p__47288;var type_ids = cljs.core.nth.call(null,vec__47290,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__47288 = null;if (arguments.length > 0) {
  p__47288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__47288);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__47291){
var p__47288 = cljs.core.seq(arglist__47291);
return portfolio_company_sites__delegate(p__47288);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__47292){var vec__47294 = p__47292;var type_ids = cljs.core.nth.call(null,vec__47294,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__47292 = null;if (arguments.length > 0) {
  p__47292 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__47292);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__47295){
var p__47292 = cljs.core.seq(arglist__47295);
return portfolio_company_sites_by_company__delegate(p__47292);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__47296){var vec__47298 = p__47296;var type_ids = cljs.core.nth.call(null,vec__47298,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__47296 = null;if (arguments.length > 0) {
  p__47296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__47296);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__47299){
var p__47296 = cljs.core.seq(arglist__47299);
return portfolio_company_locations__delegate(p__47296);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__47300){var vec__47302 = p__47300;var type_ids = cljs.core.nth.call(null,vec__47302,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__47300 = null;if (arguments.length > 0) {
  p__47300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__47300);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__47303){
var p__47300 = cljs.core.seq(arglist__47303);
return portfolio_company_site_stats__delegate(p__47300);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__47304){var vec__47306 = p__47304;var type_ids = cljs.core.nth.call(null,vec__47306,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__47304 = null;if (arguments.length > 0) {
  p__47304 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__47304);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__47307){
var p__47304 = cljs.core.seq(arglist__47307);
return portfolio_company_site_account_timelines__delegate(p__47304);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__47308){var vec__47310 = p__47308;var type_ids = cljs.core.nth.call(null,vec__47310,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__47308 = null;if (arguments.length > 0) {
  p__47308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__47308);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__47311){
var p__47308 = cljs.core.seq(arglist__47311);
return investment_account_timelines__delegate(p__47308);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__47312){var vec__47314 = p__47312;var type_ids = cljs.core.nth.call(null,vec__47314,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__47312 = null;if (arguments.length > 0) {
  p__47312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__47312);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__47315){
var p__47312 = cljs.core.seq(arglist__47315);
return investment_stats__delegate(p__47312);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__47316){var vec__47318 = p__47316;var type_ids = cljs.core.nth.call(null,vec__47318,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__47316 = null;if (arguments.length > 0) {
  p__47316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__47316);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__47319){
var p__47316 = cljs.core.seq(arglist__47319);
return investment_aggs__delegate(p__47316);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__47320){var vec__47322 = p__47320;var type_ids = cljs.core.nth.call(null,vec__47322,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__47320 = null;if (arguments.length > 0) {
  p__47320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__47320);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__47323){
var p__47320 = cljs.core.seq(arglist__47323);
return investments__delegate(p__47320);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map