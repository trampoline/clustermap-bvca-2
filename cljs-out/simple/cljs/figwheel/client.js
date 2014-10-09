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
var log__delegate = function (p__38545,args){var map__38547 = p__38545;var map__38547__$1 = ((cljs.core.seq_QMARK_.call(null,map__38547))?cljs.core.apply.call(null,cljs.core.hash_map,map__38547):map__38547);var debug = cljs.core.get.call(null,map__38547__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__38545,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__38545,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__38548){
var p__38545 = cljs.core.first(arglist__38548);
var args = cljs.core.rest(arglist__38548);
return log__delegate(p__38545,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__38549){var map__38551 = p__38549;var map__38551__$1 = ((cljs.core.seq_QMARK_.call(null,map__38551))?cljs.core.apply.call(null,cljs.core.hash_map,map__38551):map__38551);var websocket_url = cljs.core.get.call(null,map__38551__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__38552,callback){var map__38554 = p__38552;var map__38554__$1 = ((cljs.core.seq_QMARK_.call(null,map__38554))?cljs.core.apply.call(null,cljs.core.hash_map,map__38554):map__38554);var msg = map__38554__$1;var dependency_file = cljs.core.get.call(null,map__38554__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__38554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__38554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__38554,map__38554__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__38554,map__38554__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__38555,p__38556){var map__38559 = p__38555;var map__38559__$1 = ((cljs.core.seq_QMARK_.call(null,map__38559))?cljs.core.apply.call(null,cljs.core.hash_map,map__38559):map__38559);var opts = map__38559__$1;var url_rewriter = cljs.core.get.call(null,map__38559__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__38560 = p__38556;var map__38560__$1 = ((cljs.core.seq_QMARK_.call(null,map__38560))?cljs.core.apply.call(null,cljs.core.hash_map,map__38560):map__38560);var d = map__38560__$1;var file = cljs.core.get.call(null,map__38560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__38561,p__38562){var map__38604 = p__38561;var map__38604__$1 = ((cljs.core.seq_QMARK_.call(null,map__38604))?cljs.core.apply.call(null,cljs.core.hash_map,map__38604):map__38604);var opts = map__38604__$1;var on_jsload = cljs.core.get.call(null,map__38604__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__38604__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__38605 = p__38562;var map__38605__$1 = ((cljs.core.seq_QMARK_.call(null,map__38605))?cljs.core.apply.call(null,cljs.core.hash_map,map__38605):map__38605);var files = cljs.core.get.call(null,map__38605__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files){
return (function (state_38628){var state_val_38629 = (state_38628[(1)]);if((state_val_38629 === (6)))
{var inst_38610 = (state_38628[(7)]);var inst_38619 = (state_38628[(2)]);var inst_38620 = cljs.core.PersistentVector.EMPTY_NODE;var inst_38621 = [inst_38610];var inst_38622 = (new cljs.core.PersistentVector(null,1,(5),inst_38620,inst_38621,null));var inst_38623 = cljs.core.apply.call(null,on_jsload,inst_38622);var state_38628__$1 = (function (){var statearr_38630 = state_38628;(statearr_38630[(8)] = inst_38619);
return statearr_38630;
})();var statearr_38631_38645 = state_38628__$1;(statearr_38631_38645[(2)] = inst_38623);
(statearr_38631_38645[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38629 === (5)))
{var inst_38626 = (state_38628[(2)]);var state_38628__$1 = state_38628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38628__$1,inst_38626);
} else
{if((state_val_38629 === (4)))
{var state_38628__$1 = state_38628;var statearr_38632_38646 = state_38628__$1;(statearr_38632_38646[(2)] = null);
(statearr_38632_38646[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38629 === (3)))
{var inst_38610 = (state_38628[(7)]);var inst_38613 = console.debug("Figwheel: loaded these files");var inst_38614 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38610);var inst_38615 = cljs.core.prn_str.call(null,inst_38614);var inst_38616 = console.log(inst_38615);var inst_38617 = cljs.core.async.timeout.call(null,(10));var state_38628__$1 = (function (){var statearr_38633 = state_38628;(statearr_38633[(9)] = inst_38613);
(statearr_38633[(10)] = inst_38616);
return statearr_38633;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38628__$1,(6),inst_38617);
} else
{if((state_val_38629 === (2)))
{var inst_38610 = (state_38628[(7)]);var inst_38610__$1 = (state_38628[(2)]);var inst_38611 = cljs.core.not_empty.call(null,inst_38610__$1);var state_38628__$1 = (function (){var statearr_38634 = state_38628;(statearr_38634[(7)] = inst_38610__$1);
return statearr_38634;
})();if(cljs.core.truth_(inst_38611))
{var statearr_38635_38647 = state_38628__$1;(statearr_38635_38647[(1)] = (3));
} else
{var statearr_38636_38648 = state_38628__$1;(statearr_38636_38648[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38629 === (1)))
{var inst_38606 = before_jsload.call(null,files);var inst_38607 = figwheel.client.add_request_urls.call(null,opts,files);var inst_38608 = figwheel.client.load_all_js_files.call(null,inst_38607);var state_38628__$1 = (function (){var statearr_38637 = state_38628;(statearr_38637[(11)] = inst_38606);
return statearr_38637;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38628__$1,(2),inst_38608);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38641 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38641[(0)] = state_machine__5694__auto__);
(statearr_38641[(1)] = (1));
return statearr_38641;
});
var state_machine__5694__auto____1 = (function (state_38628){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38642){if((e38642 instanceof Object))
{var ex__5697__auto__ = e38642;var statearr_38643_38649 = state_38628;(statearr_38643_38649[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38642;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38650 = state_38628;
state_38628 = G__38650;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38628){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files))
})();var state__5710__auto__ = (function (){var statearr_38644 = f__5709__auto__.call(null);(statearr_38644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38604,map__38604__$1,opts,on_jsload,before_jsload,map__38605,map__38605__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__38651,link_href){var map__38653 = p__38651;var map__38653__$1 = ((cljs.core.seq_QMARK_.call(null,map__38653))?cljs.core.apply.call(null,cljs.core.hash_map,map__38653):map__38653);var request_url = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_38674){var state_val_38675 = (state_38674[(1)]);if((state_val_38675 === (2)))
{var inst_38671 = (state_38674[(2)]);var inst_38672 = parent.removeChild(orig_link);var state_38674__$1 = (function (){var statearr_38676 = state_38674;(statearr_38676[(7)] = inst_38671);
return statearr_38676;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38674__$1,inst_38672);
} else
{if((state_val_38675 === (1)))
{var inst_38669 = cljs.core.async.timeout.call(null,(200));var state_38674__$1 = state_38674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38674__$1,(2),inst_38669);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38680 = [null,null,null,null,null,null,null,null];(statearr_38680[(0)] = state_machine__5694__auto__);
(statearr_38680[(1)] = (1));
return statearr_38680;
});
var state_machine__5694__auto____1 = (function (state_38674){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38681){if((e38681 instanceof Object))
{var ex__5697__auto__ = e38681;var statearr_38682_38684 = state_38674;(statearr_38682_38684[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38685 = state_38674;
state_38674 = G__38685;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38674){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_38683 = f__5709__auto__.call(null);(statearr_38683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38683;
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
figwheel.client.reload_css_file = (function reload_css_file(p__38686){var map__38688 = p__38686;var map__38688__$1 = ((cljs.core.seq_QMARK_.call(null,map__38688))?cljs.core.apply.call(null,cljs.core.hash_map,map__38688):map__38688);var f_data = map__38688__$1;var request_url = cljs.core.get.call(null,map__38688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__38689,files_msg){var map__38711 = p__38689;var map__38711__$1 = ((cljs.core.seq_QMARK_.call(null,map__38711))?cljs.core.apply.call(null,cljs.core.hash_map,map__38711):map__38711);var opts = map__38711__$1;var on_cssload = cljs.core.get.call(null,map__38711__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__38712_38732 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__38713_38733 = null;var count__38714_38734 = (0);var i__38715_38735 = (0);while(true){
if((i__38715_38735 < count__38714_38734))
{var f_38736 = cljs.core._nth.call(null,chunk__38713_38733,i__38715_38735);figwheel.client.reload_css_file.call(null,f_38736);
{
var G__38737 = seq__38712_38732;
var G__38738 = chunk__38713_38733;
var G__38739 = count__38714_38734;
var G__38740 = (i__38715_38735 + (1));
seq__38712_38732 = G__38737;
chunk__38713_38733 = G__38738;
count__38714_38734 = G__38739;
i__38715_38735 = G__38740;
continue;
}
} else
{var temp__4126__auto___38741 = cljs.core.seq.call(null,seq__38712_38732);if(temp__4126__auto___38741)
{var seq__38712_38742__$1 = temp__4126__auto___38741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38712_38742__$1))
{var c__4314__auto___38743 = cljs.core.chunk_first.call(null,seq__38712_38742__$1);{
var G__38744 = cljs.core.chunk_rest.call(null,seq__38712_38742__$1);
var G__38745 = c__4314__auto___38743;
var G__38746 = cljs.core.count.call(null,c__4314__auto___38743);
var G__38747 = (0);
seq__38712_38732 = G__38744;
chunk__38713_38733 = G__38745;
count__38714_38734 = G__38746;
i__38715_38735 = G__38747;
continue;
}
} else
{var f_38748 = cljs.core.first.call(null,seq__38712_38742__$1);figwheel.client.reload_css_file.call(null,f_38748);
{
var G__38749 = cljs.core.next.call(null,seq__38712_38742__$1);
var G__38750 = null;
var G__38751 = (0);
var G__38752 = (0);
seq__38712_38732 = G__38749;
chunk__38713_38733 = G__38750;
count__38714_38734 = G__38751;
i__38715_38735 = G__38752;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload){
return (function (state_38722){var state_val_38723 = (state_38722[(1)]);if((state_val_38723 === (2)))
{var inst_38718 = (state_38722[(2)]);var inst_38719 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_38720 = on_cssload.call(null,inst_38719);var state_38722__$1 = (function (){var statearr_38724 = state_38722;(statearr_38724[(7)] = inst_38718);
return statearr_38724;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38722__$1,inst_38720);
} else
{if((state_val_38723 === (1)))
{var inst_38716 = cljs.core.async.timeout.call(null,(100));var state_38722__$1 = state_38722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38722__$1,(2),inst_38716);
} else
{return null;
}
}
});})(c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38728 = [null,null,null,null,null,null,null,null];(statearr_38728[(0)] = state_machine__5694__auto__);
(statearr_38728[(1)] = (1));
return statearr_38728;
});
var state_machine__5694__auto____1 = (function (state_38722){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38729){if((e38729 instanceof Object))
{var ex__5697__auto__ = e38729;var statearr_38730_38753 = state_38722;(statearr_38730_38753[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38754 = state_38722;
state_38722 = G__38754;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38722){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_38731 = f__5709__auto__.call(null);(statearr_38731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38711,map__38711__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__38755){var map__38760 = p__38755;var map__38760__$1 = ((cljs.core.seq_QMARK_.call(null,map__38760))?cljs.core.apply.call(null,cljs.core.hash_map,map__38760):map__38760);var opts = map__38760__$1;var on_compile_fail = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__38761 = cljs.core._EQ_;var expr__38762 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__38761.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__38762)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38761.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__38762)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38761.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38762)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__38760,map__38760__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38767 = {"detail":url};return obj38767;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__38768){var map__38770 = p__38768;var map__38770__$1 = ((cljs.core.seq_QMARK_.call(null,map__38770))?cljs.core.apply.call(null,cljs.core.hash_map,map__38770):map__38770);var class$ = cljs.core.get.call(null,map__38770__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__38770__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38771){var map__38777 = p__38771;var map__38777__$1 = ((cljs.core.seq_QMARK_.call(null,map__38777))?cljs.core.apply.call(null,cljs.core.hash_map,map__38777):map__38777);var ed = map__38777__$1;var exception_data = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__38778_38782 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__38779_38783 = null;var count__38780_38784 = (0);var i__38781_38785 = (0);while(true){
if((i__38781_38785 < count__38780_38784))
{var msg_38786 = cljs.core._nth.call(null,chunk__38779_38783,i__38781_38785);console.log(msg_38786);
{
var G__38787 = seq__38778_38782;
var G__38788 = chunk__38779_38783;
var G__38789 = count__38780_38784;
var G__38790 = (i__38781_38785 + (1));
seq__38778_38782 = G__38787;
chunk__38779_38783 = G__38788;
count__38780_38784 = G__38789;
i__38781_38785 = G__38790;
continue;
}
} else
{var temp__4126__auto___38791 = cljs.core.seq.call(null,seq__38778_38782);if(temp__4126__auto___38791)
{var seq__38778_38792__$1 = temp__4126__auto___38791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38778_38792__$1))
{var c__4314__auto___38793 = cljs.core.chunk_first.call(null,seq__38778_38792__$1);{
var G__38794 = cljs.core.chunk_rest.call(null,seq__38778_38792__$1);
var G__38795 = c__4314__auto___38793;
var G__38796 = cljs.core.count.call(null,c__4314__auto___38793);
var G__38797 = (0);
seq__38778_38782 = G__38794;
chunk__38779_38783 = G__38795;
count__38780_38784 = G__38796;
i__38781_38785 = G__38797;
continue;
}
} else
{var msg_38798 = cljs.core.first.call(null,seq__38778_38792__$1);console.log(msg_38798);
{
var G__38799 = cljs.core.next.call(null,seq__38778_38792__$1);
var G__38800 = null;
var G__38801 = (0);
var G__38802 = (0);
seq__38778_38782 = G__38799;
chunk__38779_38783 = G__38800;
count__38780_38784 = G__38801;
i__38781_38785 = G__38802;
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
var watch_and_reload__delegate = function (p__38803){var map__38805 = p__38803;var map__38805__$1 = ((cljs.core.seq_QMARK_.call(null,map__38805))?cljs.core.apply.call(null,cljs.core.hash_map,map__38805):map__38805);var opts = map__38805__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38803 = null;if (arguments.length > 0) {
  p__38803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__38803);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38806){
var p__38803 = cljs.core.seq(arglist__38806);
return watch_and_reload__delegate(p__38803);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
