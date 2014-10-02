// Compiled by ClojureScript 0.0-2322
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
var log__delegate = function (p__19519,args){var map__19521 = p__19519;var map__19521__$1 = ((cljs.core.seq_QMARK_.call(null,map__19521))?cljs.core.apply.call(null,cljs.core.hash_map,map__19521):map__19521);var debug = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19519,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19519,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19522){
var p__19519 = cljs.core.first(arglist__19522);
var args = cljs.core.rest(arglist__19522);
return log__delegate(p__19519,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19523){var map__19525 = p__19523;var map__19525__$1 = ((cljs.core.seq_QMARK_.call(null,map__19525))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);var websocket_url = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19526,callback){var map__19528 = p__19526;var map__19528__$1 = ((cljs.core.seq_QMARK_.call(null,map__19528))?cljs.core.apply.call(null,cljs.core.hash_map,map__19528):map__19528);var msg = map__19528__$1;var dependency_file = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19528,map__19528__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19528,map__19528__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__19529,p__19530){var map__19533 = p__19529;var map__19533__$1 = ((cljs.core.seq_QMARK_.call(null,map__19533))?cljs.core.apply.call(null,cljs.core.hash_map,map__19533):map__19533);var opts = map__19533__$1;var url_rewriter = cljs.core.get.call(null,map__19533__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19534 = p__19530;var map__19534__$1 = ((cljs.core.seq_QMARK_.call(null,map__19534))?cljs.core.apply.call(null,cljs.core.hash_map,map__19534):map__19534);var d = map__19534__$1;var file = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19535,p__19536){var map__19578 = p__19535;var map__19578__$1 = ((cljs.core.seq_QMARK_.call(null,map__19578))?cljs.core.apply.call(null,cljs.core.hash_map,map__19578):map__19578);var opts = map__19578__$1;var on_jsload = cljs.core.get.call(null,map__19578__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19578__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19579 = p__19536;var map__19579__$1 = ((cljs.core.seq_QMARK_.call(null,map__19579))?cljs.core.apply.call(null,cljs.core.hash_map,map__19579):map__19579);var files = cljs.core.get.call(null,map__19579__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files){
return (function (state_19602){var state_val_19603 = (state_19602[(1)]);if((state_val_19603 === (6)))
{var inst_19584 = (state_19602[(7)]);var inst_19593 = (state_19602[(2)]);var inst_19594 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19595 = [inst_19584];var inst_19596 = (new cljs.core.PersistentVector(null,1,(5),inst_19594,inst_19595,null));var inst_19597 = cljs.core.apply.call(null,on_jsload,inst_19596);var state_19602__$1 = (function (){var statearr_19604 = state_19602;(statearr_19604[(8)] = inst_19593);
return statearr_19604;
})();var statearr_19605_19619 = state_19602__$1;(statearr_19605_19619[(2)] = inst_19597);
(statearr_19605_19619[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19603 === (5)))
{var inst_19600 = (state_19602[(2)]);var state_19602__$1 = state_19602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19602__$1,inst_19600);
} else
{if((state_val_19603 === (4)))
{var state_19602__$1 = state_19602;var statearr_19606_19620 = state_19602__$1;(statearr_19606_19620[(2)] = null);
(statearr_19606_19620[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19603 === (3)))
{var inst_19584 = (state_19602[(7)]);var inst_19587 = console.debug("Figwheel: loaded these files");var inst_19588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19584);var inst_19589 = cljs.core.prn_str.call(null,inst_19588);var inst_19590 = console.log(inst_19589);var inst_19591 = cljs.core.async.timeout.call(null,(10));var state_19602__$1 = (function (){var statearr_19607 = state_19602;(statearr_19607[(9)] = inst_19590);
(statearr_19607[(10)] = inst_19587);
return statearr_19607;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19602__$1,(6),inst_19591);
} else
{if((state_val_19603 === (2)))
{var inst_19584 = (state_19602[(7)]);var inst_19584__$1 = (state_19602[(2)]);var inst_19585 = cljs.core.not_empty.call(null,inst_19584__$1);var state_19602__$1 = (function (){var statearr_19608 = state_19602;(statearr_19608[(7)] = inst_19584__$1);
return statearr_19608;
})();if(cljs.core.truth_(inst_19585))
{var statearr_19609_19621 = state_19602__$1;(statearr_19609_19621[(1)] = (3));
} else
{var statearr_19610_19622 = state_19602__$1;(statearr_19610_19622[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19603 === (1)))
{var inst_19580 = before_jsload.call(null,files);var inst_19581 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19582 = figwheel.client.load_all_js_files.call(null,inst_19581);var state_19602__$1 = (function (){var statearr_19611 = state_19602;(statearr_19611[(11)] = inst_19580);
return statearr_19611;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19602__$1,(2),inst_19582);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19615 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19615[(0)] = state_machine__5694__auto__);
(statearr_19615[(1)] = (1));
return statearr_19615;
});
var state_machine__5694__auto____1 = (function (state_19602){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19616){if((e19616 instanceof Object))
{var ex__5697__auto__ = e19616;var statearr_19617_19623 = state_19602;(statearr_19617_19623[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19616;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19624 = state_19602;
state_19602 = G__19624;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19602){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files))
})();var state__5710__auto__ = (function (){var statearr_19618 = f__5709__auto__.call(null);(statearr_19618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19578,map__19578__$1,opts,on_jsload,before_jsload,map__19579,map__19579__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19625,link_href){var map__19627 = p__19625;var map__19627__$1 = ((cljs.core.seq_QMARK_.call(null,map__19627))?cljs.core.apply.call(null,cljs.core.hash_map,map__19627):map__19627);var request_url = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_19648){var state_val_19649 = (state_19648[(1)]);if((state_val_19649 === (2)))
{var inst_19645 = (state_19648[(2)]);var inst_19646 = parent.removeChild(orig_link);var state_19648__$1 = (function (){var statearr_19650 = state_19648;(statearr_19650[(7)] = inst_19645);
return statearr_19650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19648__$1,inst_19646);
} else
{if((state_val_19649 === (1)))
{var inst_19643 = cljs.core.async.timeout.call(null,(200));var state_19648__$1 = state_19648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19648__$1,(2),inst_19643);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19654 = [null,null,null,null,null,null,null,null];(statearr_19654[(0)] = state_machine__5694__auto__);
(statearr_19654[(1)] = (1));
return statearr_19654;
});
var state_machine__5694__auto____1 = (function (state_19648){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19655){if((e19655 instanceof Object))
{var ex__5697__auto__ = e19655;var statearr_19656_19658 = state_19648;(statearr_19656_19658[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19655;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19659 = state_19648;
state_19648 = G__19659;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19648){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_19657 = f__5709__auto__.call(null);(statearr_19657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,parent))
);
return c__5708__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__19660){var map__19662 = p__19660;var map__19662__$1 = ((cljs.core.seq_QMARK_.call(null,map__19662))?cljs.core.apply.call(null,cljs.core.hash_map,map__19662):map__19662);var f_data = map__19662__$1;var request_url = cljs.core.get.call(null,map__19662__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19662__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19663,files_msg){var map__19685 = p__19663;var map__19685__$1 = ((cljs.core.seq_QMARK_.call(null,map__19685))?cljs.core.apply.call(null,cljs.core.hash_map,map__19685):map__19685);var opts = map__19685__$1;var on_cssload = cljs.core.get.call(null,map__19685__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19686_19706 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19687_19707 = null;var count__19688_19708 = (0);var i__19689_19709 = (0);while(true){
if((i__19689_19709 < count__19688_19708))
{var f_19710 = cljs.core._nth.call(null,chunk__19687_19707,i__19689_19709);figwheel.client.reload_css_file.call(null,f_19710);
{
var G__19711 = seq__19686_19706;
var G__19712 = chunk__19687_19707;
var G__19713 = count__19688_19708;
var G__19714 = (i__19689_19709 + (1));
seq__19686_19706 = G__19711;
chunk__19687_19707 = G__19712;
count__19688_19708 = G__19713;
i__19689_19709 = G__19714;
continue;
}
} else
{var temp__4126__auto___19715 = cljs.core.seq.call(null,seq__19686_19706);if(temp__4126__auto___19715)
{var seq__19686_19716__$1 = temp__4126__auto___19715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19686_19716__$1))
{var c__4314__auto___19717 = cljs.core.chunk_first.call(null,seq__19686_19716__$1);{
var G__19718 = cljs.core.chunk_rest.call(null,seq__19686_19716__$1);
var G__19719 = c__4314__auto___19717;
var G__19720 = cljs.core.count.call(null,c__4314__auto___19717);
var G__19721 = (0);
seq__19686_19706 = G__19718;
chunk__19687_19707 = G__19719;
count__19688_19708 = G__19720;
i__19689_19709 = G__19721;
continue;
}
} else
{var f_19722 = cljs.core.first.call(null,seq__19686_19716__$1);figwheel.client.reload_css_file.call(null,f_19722);
{
var G__19723 = cljs.core.next.call(null,seq__19686_19716__$1);
var G__19724 = null;
var G__19725 = (0);
var G__19726 = (0);
seq__19686_19706 = G__19723;
chunk__19687_19707 = G__19724;
count__19688_19708 = G__19725;
i__19689_19709 = G__19726;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload){
return (function (state_19696){var state_val_19697 = (state_19696[(1)]);if((state_val_19697 === (2)))
{var inst_19692 = (state_19696[(2)]);var inst_19693 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19694 = on_cssload.call(null,inst_19693);var state_19696__$1 = (function (){var statearr_19698 = state_19696;(statearr_19698[(7)] = inst_19692);
return statearr_19698;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19696__$1,inst_19694);
} else
{if((state_val_19697 === (1)))
{var inst_19690 = cljs.core.async.timeout.call(null,(100));var state_19696__$1 = state_19696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19696__$1,(2),inst_19690);
} else
{return null;
}
}
});})(c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19702 = [null,null,null,null,null,null,null,null];(statearr_19702[(0)] = state_machine__5694__auto__);
(statearr_19702[(1)] = (1));
return statearr_19702;
});
var state_machine__5694__auto____1 = (function (state_19696){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19703){if((e19703 instanceof Object))
{var ex__5697__auto__ = e19703;var statearr_19704_19727 = state_19696;(statearr_19704_19727[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19728 = state_19696;
state_19696 = G__19728;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19696){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_19705 = f__5709__auto__.call(null);(statearr_19705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19685,map__19685__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19729){var map__19734 = p__19729;var map__19734__$1 = ((cljs.core.seq_QMARK_.call(null,map__19734))?cljs.core.apply.call(null,cljs.core.hash_map,map__19734):map__19734);var opts = map__19734__$1;var on_compile_fail = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19735 = cljs.core._EQ_;var expr__19736 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19735.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19736)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19735.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19736)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19735.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19736)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19734,map__19734__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19741 = {"detail":url};return obj19741;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19742){var map__19744 = p__19742;var map__19744__$1 = ((cljs.core.seq_QMARK_.call(null,map__19744))?cljs.core.apply.call(null,cljs.core.hash_map,map__19744):map__19744);var class$ = cljs.core.get.call(null,map__19744__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19744__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19745){var map__19751 = p__19745;var map__19751__$1 = ((cljs.core.seq_QMARK_.call(null,map__19751))?cljs.core.apply.call(null,cljs.core.hash_map,map__19751):map__19751);var ed = map__19751__$1;var exception_data = cljs.core.get.call(null,map__19751__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19751__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__19752_19756 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19753_19757 = null;var count__19754_19758 = (0);var i__19755_19759 = (0);while(true){
if((i__19755_19759 < count__19754_19758))
{var msg_19760 = cljs.core._nth.call(null,chunk__19753_19757,i__19755_19759);console.log(msg_19760);
{
var G__19761 = seq__19752_19756;
var G__19762 = chunk__19753_19757;
var G__19763 = count__19754_19758;
var G__19764 = (i__19755_19759 + (1));
seq__19752_19756 = G__19761;
chunk__19753_19757 = G__19762;
count__19754_19758 = G__19763;
i__19755_19759 = G__19764;
continue;
}
} else
{var temp__4126__auto___19765 = cljs.core.seq.call(null,seq__19752_19756);if(temp__4126__auto___19765)
{var seq__19752_19766__$1 = temp__4126__auto___19765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19752_19766__$1))
{var c__4314__auto___19767 = cljs.core.chunk_first.call(null,seq__19752_19766__$1);{
var G__19768 = cljs.core.chunk_rest.call(null,seq__19752_19766__$1);
var G__19769 = c__4314__auto___19767;
var G__19770 = cljs.core.count.call(null,c__4314__auto___19767);
var G__19771 = (0);
seq__19752_19756 = G__19768;
chunk__19753_19757 = G__19769;
count__19754_19758 = G__19770;
i__19755_19759 = G__19771;
continue;
}
} else
{var msg_19772 = cljs.core.first.call(null,seq__19752_19766__$1);console.log(msg_19772);
{
var G__19773 = cljs.core.next.call(null,seq__19752_19766__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__19752_19756 = G__19773;
chunk__19753_19757 = G__19774;
count__19754_19758 = G__19775;
i__19755_19759 = G__19776;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19777){var map__19779 = p__19777;var map__19779__$1 = ((cljs.core.seq_QMARK_.call(null,map__19779))?cljs.core.apply.call(null,cljs.core.hash_map,map__19779):map__19779);var opts = map__19779__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19777 = null;if (arguments.length > 0) {
  p__19777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19777);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19780){
var p__19777 = cljs.core.seq(arglist__19780);
return watch_and_reload__delegate(p__19777);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
