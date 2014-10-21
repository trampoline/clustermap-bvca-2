// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__70447,args){var map__70449 = p__70447;var map__70449__$1 = ((cljs.core.seq_QMARK_(map__70449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70449):map__70449);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,cljs.core.constant$keyword$1622);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__70447,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__70447,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__70450){
var p__70447 = cljs.core.first(arglist__70450);
var args = cljs.core.rest(arglist__70450);
return log__delegate(p__70447,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__70451){var map__70453 = p__70451;var map__70453__$1 = ((cljs.core.seq_QMARK_(map__70453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70453):map__70453);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70453__$1,cljs.core.constant$keyword$1623);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__70454,callback){var map__70457 = p__70454;var map__70457__$1 = ((cljs.core.seq_QMARK_(map__70457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70457):map__70457);var msg = map__70457__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70457__$1,cljs.core.constant$keyword$1624);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70457__$1,cljs.core.constant$keyword$1625);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70457__$1,cljs.core.constant$keyword$1626);if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return (function (){var G__70458 = figwheel.client.add_cache_buster(request_url);return goog.net.jsloader.load(G__70458);
})().addCallback(((function (map__70457,map__70457__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__70457,map__70457__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__70459,p__70460){var map__70464 = p__70459;var map__70464__$1 = ((cljs.core.seq_QMARK_(map__70464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70464):map__70464);var opts = map__70464__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70464__$1,cljs.core.constant$keyword$1627);var map__70465 = p__70460;var map__70465__$1 = ((cljs.core.seq_QMARK_(map__70465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70465):map__70465);var d = map__70465__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70465__$1,cljs.core.constant$keyword$1628);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1626,(function (){var G__70466 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file));return (url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(G__70466) : url_rewriter.call(null,G__70466));
})());
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__70467,p__70468){var map__70511 = p__70467;var map__70511__$1 = ((cljs.core.seq_QMARK_(map__70511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70511):map__70511);var opts = map__70511__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70511__$1,cljs.core.constant$keyword$1629);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70511__$1,cljs.core.constant$keyword$1630);var map__70512 = p__70468;var map__70512__$1 = ((cljs.core.seq_QMARK_(map__70512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70512):map__70512);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70512__$1,cljs.core.constant$keyword$1631);var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files){
return (function (state_70535){var state_val_70536 = (state_70535[(1)]);if((state_val_70536 === (6)))
{var inst_70517 = (state_70535[(7)]);var inst_70526 = (state_70535[(2)]);var inst_70527 = cljs.core.PersistentVector.EMPTY_NODE;var inst_70528 = [inst_70517];var inst_70529 = (new cljs.core.PersistentVector(null,1,(5),inst_70527,inst_70528,null));var inst_70530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_70529);var state_70535__$1 = (function (){var statearr_70537 = state_70535;(statearr_70537[(8)] = inst_70526);
return statearr_70537;
})();var statearr_70538_70553 = state_70535__$1;(statearr_70538_70553[(2)] = inst_70530);
(statearr_70538_70553[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_70536 === (5)))
{var inst_70533 = (state_70535[(2)]);var state_70535__$1 = state_70535;return cljs.core.async.impl.ioc_helpers.return_chan(state_70535__$1,inst_70533);
} else
{if((state_val_70536 === (4)))
{var state_70535__$1 = state_70535;var statearr_70539_70554 = state_70535__$1;(statearr_70539_70554[(2)] = null);
(statearr_70539_70554[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_70536 === (3)))
{var inst_70517 = (state_70535[(7)]);var inst_70520 = console.debug("Figwheel: loaded these files");var inst_70521 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1628,inst_70517);var inst_70522 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_70521], 0));var inst_70523 = console.log(inst_70522);var inst_70524 = cljs.core.async.timeout((10));var state_70535__$1 = (function (){var statearr_70540 = state_70535;(statearr_70540[(9)] = inst_70523);
(statearr_70540[(10)] = inst_70520);
return statearr_70540;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70535__$1,(6),inst_70524);
} else
{if((state_val_70536 === (2)))
{var inst_70517 = (state_70535[(7)]);var inst_70517__$1 = (state_70535[(2)]);var inst_70518 = cljs.core.not_empty(inst_70517__$1);var state_70535__$1 = (function (){var statearr_70541 = state_70535;(statearr_70541[(7)] = inst_70517__$1);
return statearr_70541;
})();if(cljs.core.truth_(inst_70518))
{var statearr_70542_70555 = state_70535__$1;(statearr_70542_70555[(1)] = (3));
} else
{var statearr_70543_70556 = state_70535__$1;(statearr_70543_70556[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_70536 === (1)))
{var inst_70513 = (function (){var G__70544 = files;return (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(G__70544) : before_jsload.call(null,G__70544));
})();var inst_70514 = figwheel.client.add_request_urls(opts,files);var inst_70515 = figwheel.client.load_all_js_files(inst_70514);var state_70535__$1 = (function (){var statearr_70545 = state_70535;(statearr_70545[(11)] = inst_70513);
return statearr_70545;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70535__$1,(2),inst_70515);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_70549 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_70549[(0)] = state_machine__5805__auto__);
(statearr_70549[(1)] = (1));
return statearr_70549;
});
var state_machine__5805__auto____1 = (function (state_70535){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_70535);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e70550){if((e70550 instanceof Object))
{var ex__5808__auto__ = e70550;var statearr_70551_70557 = state_70535;(statearr_70551_70557[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70535);
return cljs.core.constant$keyword$1120;
} else
{throw e70550;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__70558 = state_70535;
state_70535 = G__70558;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_70535){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_70535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files))
})();var state__5821__auto__ = (function (){var statearr_70552 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_70552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_70552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,map__70511,map__70511__$1,opts,on_jsload,before_jsload,map__70512,map__70512__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__70559,link_href){var map__70561 = p__70559;var map__70561__$1 = ((cljs.core.seq_QMARK_(map__70561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70561):map__70561);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70561__$1,cljs.core.constant$keyword$1626);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70561__$1,cljs.core.constant$keyword$1628);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,parent){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,parent){
return (function (state_70582){var state_val_70583 = (state_70582[(1)]);if((state_val_70583 === (2)))
{var inst_70579 = (state_70582[(2)]);var inst_70580 = parent.removeChild(orig_link);var state_70582__$1 = (function (){var statearr_70584 = state_70582;(statearr_70584[(7)] = inst_70579);
return statearr_70584;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70582__$1,inst_70580);
} else
{if((state_val_70583 === (1)))
{var inst_70577 = cljs.core.async.timeout((200));var state_70582__$1 = state_70582;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70582__$1,(2),inst_70577);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_70588 = [null,null,null,null,null,null,null,null];(statearr_70588[(0)] = state_machine__5805__auto__);
(statearr_70588[(1)] = (1));
return statearr_70588;
});
var state_machine__5805__auto____1 = (function (state_70582){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_70582);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e70589){if((e70589 instanceof Object))
{var ex__5808__auto__ = e70589;var statearr_70590_70592 = state_70582;(statearr_70590_70592[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70582);
return cljs.core.constant$keyword$1120;
} else
{throw e70589;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__70593 = state_70582;
state_70582 = G__70593;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_70582){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_70582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_70591 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_70591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_70591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,parent))
);
return c__5819__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__70594){var map__70596 = p__70594;var map__70596__$1 = ((cljs.core.seq_QMARK_(map__70596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70596):map__70596);var f_data = map__70596__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70596__$1,cljs.core.constant$keyword$1626);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70596__$1,cljs.core.constant$keyword$1628);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__70597,files_msg){var map__70620 = p__70597;var map__70620__$1 = ((cljs.core.seq_QMARK_(map__70620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70620):map__70620);var opts = map__70620__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70620__$1,cljs.core.constant$keyword$1632);var seq__70621_70642 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1631.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__70622_70643 = null;var count__70623_70644 = (0);var i__70624_70645 = (0);while(true){
if((i__70624_70645 < count__70623_70644))
{var f_70646 = chunk__70622_70643.cljs$core$IIndexed$_nth$arity$2(null,i__70624_70645);figwheel.client.reload_css_file(f_70646);
{
var G__70647 = seq__70621_70642;
var G__70648 = chunk__70622_70643;
var G__70649 = count__70623_70644;
var G__70650 = (i__70624_70645 + (1));
seq__70621_70642 = G__70647;
chunk__70622_70643 = G__70648;
count__70623_70644 = G__70649;
i__70624_70645 = G__70650;
continue;
}
} else
{var temp__4126__auto___70651 = cljs.core.seq(seq__70621_70642);if(temp__4126__auto___70651)
{var seq__70621_70652__$1 = temp__4126__auto___70651;if(cljs.core.chunked_seq_QMARK_(seq__70621_70652__$1))
{var c__4406__auto___70653 = cljs.core.chunk_first(seq__70621_70652__$1);{
var G__70654 = cljs.core.chunk_rest(seq__70621_70652__$1);
var G__70655 = c__4406__auto___70653;
var G__70656 = cljs.core.count(c__4406__auto___70653);
var G__70657 = (0);
seq__70621_70642 = G__70654;
chunk__70622_70643 = G__70655;
count__70623_70644 = G__70656;
i__70624_70645 = G__70657;
continue;
}
} else
{var f_70658 = cljs.core.first(seq__70621_70652__$1);figwheel.client.reload_css_file(f_70658);
{
var G__70659 = cljs.core.next(seq__70621_70652__$1);
var G__70660 = null;
var G__70661 = (0);
var G__70662 = (0);
seq__70621_70642 = G__70659;
chunk__70622_70643 = G__70660;
count__70623_70644 = G__70661;
i__70624_70645 = G__70662;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload){
return (function (state_70631){var state_val_70632 = (state_70631[(1)]);if((state_val_70632 === (2)))
{var inst_70627 = (state_70631[(2)]);var inst_70628 = cljs.core.constant$keyword$1631.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_70629 = (function (){var G__70633 = inst_70628;return (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(G__70633) : on_cssload.call(null,G__70633));
})();var state_70631__$1 = (function (){var statearr_70634 = state_70631;(statearr_70634[(7)] = inst_70627);
return statearr_70634;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70631__$1,inst_70629);
} else
{if((state_val_70632 === (1)))
{var inst_70625 = cljs.core.async.timeout((100));var state_70631__$1 = state_70631;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70631__$1,(2),inst_70625);
} else
{return null;
}
}
});})(c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_70638 = [null,null,null,null,null,null,null,null];(statearr_70638[(0)] = state_machine__5805__auto__);
(statearr_70638[(1)] = (1));
return statearr_70638;
});
var state_machine__5805__auto____1 = (function (state_70631){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_70631);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e70639){if((e70639 instanceof Object))
{var ex__5808__auto__ = e70639;var statearr_70640_70663 = state_70631;(statearr_70640_70663[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70631);
return cljs.core.constant$keyword$1120;
} else
{throw e70639;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__70664 = state_70631;
state_70631 = G__70664;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_70631){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_70631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_70641 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_70641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_70641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,map__70620,map__70620__$1,opts,on_cssload))
);
return c__5819__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){var G__70666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1633);return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(G__70666) : compile_fail_callback.call(null,G__70666));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{var G__70668_70669 = figwheel.client.add_cache_buster(src);goog.net.jsloader.load(G__70668_70669);
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__70670){var map__70682 = p__70670;var map__70682__$1 = ((cljs.core.seq_QMARK_(map__70682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70682):map__70682);var opts = map__70682__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70682__$1,cljs.core.constant$keyword$1634);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70682__$1,cljs.core.constant$keyword$1635);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70682__$1,cljs.core.constant$keyword$1623);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70682__$1,cljs.core.constant$keyword$1636);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__70683 = cljs.core._EQ_;var expr__70684 = cljs.core.constant$keyword$1633.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((function (){var G__70686 = cljs.core.constant$keyword$1637;var G__70687 = expr__70684;return (pred__70683.cljs$core$IFn$_invoke$arity$2 ? pred__70683.cljs$core$IFn$_invoke$arity$2(G__70686,G__70687) : pred__70683.call(null,G__70686,G__70687));
})()))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__70688 = cljs.core.constant$keyword$1638;var G__70689 = expr__70684;return (pred__70683.cljs$core$IFn$_invoke$arity$2 ? pred__70683.cljs$core$IFn$_invoke$arity$2(G__70688,G__70689) : pred__70683.call(null,G__70688,G__70689));
})()))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__70690 = cljs.core.constant$keyword$1639;var G__70691 = expr__70684;return (pred__70683.cljs$core$IFn$_invoke$arity$2 ? pred__70683.cljs$core$IFn$_invoke$arity$2(G__70690,G__70691) : pred__70683.call(null,G__70690,G__70691));
})()))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1636,(retry_count - (1))));
});})(socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__70682,map__70682__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj70695 = {"detail":url};return obj70695;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1441,cljs.core.constant$keyword$1257], null)),get_essential_messages(cljs.core.constant$keyword$1640.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__70697){var map__70699 = p__70697;var map__70699__$1 = ((cljs.core.seq_QMARK_(map__70699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70699):map__70699);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70699__$1,cljs.core.constant$keyword$1257);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70699__$1,cljs.core.constant$keyword$1441);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__70700){var map__70707 = p__70700;var map__70707__$1 = ((cljs.core.seq_QMARK_(map__70707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70707):map__70707);var ed = map__70707__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70707__$1,cljs.core.constant$keyword$1641);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70707__$1,cljs.core.constant$keyword$1642);console.debug("Figwheel: Compile Exception");
var seq__70708_70713 = cljs.core.seq((function (){var G__70712 = exception_data;return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__70712) : figwheel.client.format_messages.call(null,G__70712));
})());var chunk__70709_70714 = null;var count__70710_70715 = (0);var i__70711_70716 = (0);while(true){
if((i__70711_70716 < count__70710_70715))
{var msg_70717 = chunk__70709_70714.cljs$core$IIndexed$_nth$arity$2(null,i__70711_70716);console.log(msg_70717);
{
var G__70718 = seq__70708_70713;
var G__70719 = chunk__70709_70714;
var G__70720 = count__70710_70715;
var G__70721 = (i__70711_70716 + (1));
seq__70708_70713 = G__70718;
chunk__70709_70714 = G__70719;
count__70710_70715 = G__70720;
i__70711_70716 = G__70721;
continue;
}
} else
{var temp__4126__auto___70722 = cljs.core.seq(seq__70708_70713);if(temp__4126__auto___70722)
{var seq__70708_70723__$1 = temp__4126__auto___70722;if(cljs.core.chunked_seq_QMARK_(seq__70708_70723__$1))
{var c__4406__auto___70724 = cljs.core.chunk_first(seq__70708_70723__$1);{
var G__70725 = cljs.core.chunk_rest(seq__70708_70723__$1);
var G__70726 = c__4406__auto___70724;
var G__70727 = cljs.core.count(c__4406__auto___70724);
var G__70728 = (0);
seq__70708_70713 = G__70725;
chunk__70709_70714 = G__70726;
count__70710_70715 = G__70727;
i__70711_70716 = G__70728;
continue;
}
} else
{var msg_70729 = cljs.core.first(seq__70708_70723__$1);console.log(msg_70729);
{
var G__70730 = cljs.core.next(seq__70708_70723__$1);
var G__70731 = null;
var G__70732 = (0);
var G__70733 = (0);
seq__70708_70713 = G__70730;
chunk__70709_70714 = G__70731;
count__70710_70715 = G__70732;
i__70711_70716 = G__70733;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1628,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1636,(100),cljs.core.constant$keyword$1635,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1629,(function (){var or__3637__auto__ = cljs.core.constant$keyword$1635.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1632,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1630,figwheel.client.default_before_load,cljs.core.constant$keyword$1634,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1627,cljs.core.identity,cljs.core.constant$keyword$1623,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__70734){var map__70736 = p__70734;var map__70736__$1 = ((cljs.core.seq_QMARK_(map__70736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70736):map__70736);var opts = map__70736__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__70734 = null;if (arguments.length > 0) {
  p__70734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__70734);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__70737){
var p__70734 = cljs.core.seq(arglist__70737);
return watch_and_reload__delegate(p__70734);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
