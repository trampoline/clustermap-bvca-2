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
var log__delegate = function (p__56789,args){var map__56791 = p__56789;var map__56791__$1 = ((cljs.core.seq_QMARK_.call(null,map__56791))?cljs.core.apply.call(null,cljs.core.hash_map,map__56791):map__56791);var debug = cljs.core.get.call(null,map__56791__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__56789,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__56789,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__56792){
var p__56789 = cljs.core.first(arglist__56792);
var args = cljs.core.rest(arglist__56792);
return log__delegate(p__56789,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__56793){var map__56795 = p__56793;var map__56795__$1 = ((cljs.core.seq_QMARK_.call(null,map__56795))?cljs.core.apply.call(null,cljs.core.hash_map,map__56795):map__56795);var websocket_url = cljs.core.get.call(null,map__56795__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__56796,callback){var map__56798 = p__56796;var map__56798__$1 = ((cljs.core.seq_QMARK_.call(null,map__56798))?cljs.core.apply.call(null,cljs.core.hash_map,map__56798):map__56798);var msg = map__56798__$1;var dependency_file = cljs.core.get.call(null,map__56798__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__56798__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__56798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__56798,map__56798__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__56798,map__56798__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__56799,p__56800){var map__56803 = p__56799;var map__56803__$1 = ((cljs.core.seq_QMARK_.call(null,map__56803))?cljs.core.apply.call(null,cljs.core.hash_map,map__56803):map__56803);var opts = map__56803__$1;var url_rewriter = cljs.core.get.call(null,map__56803__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__56804 = p__56800;var map__56804__$1 = ((cljs.core.seq_QMARK_.call(null,map__56804))?cljs.core.apply.call(null,cljs.core.hash_map,map__56804):map__56804);var d = map__56804__$1;var file = cljs.core.get.call(null,map__56804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__56805,p__56806){var map__56848 = p__56805;var map__56848__$1 = ((cljs.core.seq_QMARK_.call(null,map__56848))?cljs.core.apply.call(null,cljs.core.hash_map,map__56848):map__56848);var opts = map__56848__$1;var on_jsload = cljs.core.get.call(null,map__56848__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__56848__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__56849 = p__56806;var map__56849__$1 = ((cljs.core.seq_QMARK_.call(null,map__56849))?cljs.core.apply.call(null,cljs.core.hash_map,map__56849):map__56849);var files = cljs.core.get.call(null,map__56849__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files){
return (function (state_56872){var state_val_56873 = (state_56872[(1)]);if((state_val_56873 === (6)))
{var inst_56854 = (state_56872[(7)]);var inst_56863 = (state_56872[(2)]);var inst_56864 = cljs.core.PersistentVector.EMPTY_NODE;var inst_56865 = [inst_56854];var inst_56866 = (new cljs.core.PersistentVector(null,1,(5),inst_56864,inst_56865,null));var inst_56867 = cljs.core.apply.call(null,on_jsload,inst_56866);var state_56872__$1 = (function (){var statearr_56874 = state_56872;(statearr_56874[(8)] = inst_56863);
return statearr_56874;
})();var statearr_56875_56889 = state_56872__$1;(statearr_56875_56889[(2)] = inst_56867);
(statearr_56875_56889[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56873 === (5)))
{var inst_56870 = (state_56872[(2)]);var state_56872__$1 = state_56872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56872__$1,inst_56870);
} else
{if((state_val_56873 === (4)))
{var state_56872__$1 = state_56872;var statearr_56876_56890 = state_56872__$1;(statearr_56876_56890[(2)] = null);
(statearr_56876_56890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56873 === (3)))
{var inst_56854 = (state_56872[(7)]);var inst_56857 = console.debug("Figwheel: loaded these files");var inst_56858 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56854);var inst_56859 = cljs.core.prn_str.call(null,inst_56858);var inst_56860 = console.log(inst_56859);var inst_56861 = cljs.core.async.timeout.call(null,(10));var state_56872__$1 = (function (){var statearr_56877 = state_56872;(statearr_56877[(9)] = inst_56860);
(statearr_56877[(10)] = inst_56857);
return statearr_56877;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56872__$1,(6),inst_56861);
} else
{if((state_val_56873 === (2)))
{var inst_56854 = (state_56872[(7)]);var inst_56854__$1 = (state_56872[(2)]);var inst_56855 = cljs.core.not_empty.call(null,inst_56854__$1);var state_56872__$1 = (function (){var statearr_56878 = state_56872;(statearr_56878[(7)] = inst_56854__$1);
return statearr_56878;
})();if(cljs.core.truth_(inst_56855))
{var statearr_56879_56891 = state_56872__$1;(statearr_56879_56891[(1)] = (3));
} else
{var statearr_56880_56892 = state_56872__$1;(statearr_56880_56892[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56873 === (1)))
{var inst_56850 = before_jsload.call(null,files);var inst_56851 = figwheel.client.add_request_urls.call(null,opts,files);var inst_56852 = figwheel.client.load_all_js_files.call(null,inst_56851);var state_56872__$1 = (function (){var statearr_56881 = state_56872;(statearr_56881[(11)] = inst_56850);
return statearr_56881;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56872__$1,(2),inst_56852);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56885 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56885[(0)] = state_machine__5694__auto__);
(statearr_56885[(1)] = (1));
return statearr_56885;
});
var state_machine__5694__auto____1 = (function (state_56872){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56872);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56886){if((e56886 instanceof Object))
{var ex__5697__auto__ = e56886;var statearr_56887_56893 = state_56872;(statearr_56887_56893[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56894 = state_56872;
state_56872 = G__56894;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56872){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files))
})();var state__5710__auto__ = (function (){var statearr_56888 = f__5709__auto__.call(null);(statearr_56888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__56848,map__56848__$1,opts,on_jsload,before_jsload,map__56849,map__56849__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__56895,link_href){var map__56897 = p__56895;var map__56897__$1 = ((cljs.core.seq_QMARK_.call(null,map__56897))?cljs.core.apply.call(null,cljs.core.hash_map,map__56897):map__56897);var request_url = cljs.core.get.call(null,map__56897__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__56897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_56918){var state_val_56919 = (state_56918[(1)]);if((state_val_56919 === (2)))
{var inst_56915 = (state_56918[(2)]);var inst_56916 = parent.removeChild(orig_link);var state_56918__$1 = (function (){var statearr_56920 = state_56918;(statearr_56920[(7)] = inst_56915);
return statearr_56920;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56918__$1,inst_56916);
} else
{if((state_val_56919 === (1)))
{var inst_56913 = cljs.core.async.timeout.call(null,(200));var state_56918__$1 = state_56918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56918__$1,(2),inst_56913);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56924 = [null,null,null,null,null,null,null,null];(statearr_56924[(0)] = state_machine__5694__auto__);
(statearr_56924[(1)] = (1));
return statearr_56924;
});
var state_machine__5694__auto____1 = (function (state_56918){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56925){if((e56925 instanceof Object))
{var ex__5697__auto__ = e56925;var statearr_56926_56928 = state_56918;(statearr_56926_56928[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56925;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56929 = state_56918;
state_56918 = G__56929;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56918){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_56927 = f__5709__auto__.call(null);(statearr_56927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56927;
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
figwheel.client.reload_css_file = (function reload_css_file(p__56930){var map__56932 = p__56930;var map__56932__$1 = ((cljs.core.seq_QMARK_.call(null,map__56932))?cljs.core.apply.call(null,cljs.core.hash_map,map__56932):map__56932);var f_data = map__56932__$1;var request_url = cljs.core.get.call(null,map__56932__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__56932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__56933,files_msg){var map__56955 = p__56933;var map__56955__$1 = ((cljs.core.seq_QMARK_.call(null,map__56955))?cljs.core.apply.call(null,cljs.core.hash_map,map__56955):map__56955);var opts = map__56955__$1;var on_cssload = cljs.core.get.call(null,map__56955__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__56956_56976 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__56957_56977 = null;var count__56958_56978 = (0);var i__56959_56979 = (0);while(true){
if((i__56959_56979 < count__56958_56978))
{var f_56980 = cljs.core._nth.call(null,chunk__56957_56977,i__56959_56979);figwheel.client.reload_css_file.call(null,f_56980);
{
var G__56981 = seq__56956_56976;
var G__56982 = chunk__56957_56977;
var G__56983 = count__56958_56978;
var G__56984 = (i__56959_56979 + (1));
seq__56956_56976 = G__56981;
chunk__56957_56977 = G__56982;
count__56958_56978 = G__56983;
i__56959_56979 = G__56984;
continue;
}
} else
{var temp__4126__auto___56985 = cljs.core.seq.call(null,seq__56956_56976);if(temp__4126__auto___56985)
{var seq__56956_56986__$1 = temp__4126__auto___56985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56956_56986__$1))
{var c__4314__auto___56987 = cljs.core.chunk_first.call(null,seq__56956_56986__$1);{
var G__56988 = cljs.core.chunk_rest.call(null,seq__56956_56986__$1);
var G__56989 = c__4314__auto___56987;
var G__56990 = cljs.core.count.call(null,c__4314__auto___56987);
var G__56991 = (0);
seq__56956_56976 = G__56988;
chunk__56957_56977 = G__56989;
count__56958_56978 = G__56990;
i__56959_56979 = G__56991;
continue;
}
} else
{var f_56992 = cljs.core.first.call(null,seq__56956_56986__$1);figwheel.client.reload_css_file.call(null,f_56992);
{
var G__56993 = cljs.core.next.call(null,seq__56956_56986__$1);
var G__56994 = null;
var G__56995 = (0);
var G__56996 = (0);
seq__56956_56976 = G__56993;
chunk__56957_56977 = G__56994;
count__56958_56978 = G__56995;
i__56959_56979 = G__56996;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload){
return (function (state_56966){var state_val_56967 = (state_56966[(1)]);if((state_val_56967 === (2)))
{var inst_56962 = (state_56966[(2)]);var inst_56963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_56964 = on_cssload.call(null,inst_56963);var state_56966__$1 = (function (){var statearr_56968 = state_56966;(statearr_56968[(7)] = inst_56962);
return statearr_56968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56966__$1,inst_56964);
} else
{if((state_val_56967 === (1)))
{var inst_56960 = cljs.core.async.timeout.call(null,(100));var state_56966__$1 = state_56966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56966__$1,(2),inst_56960);
} else
{return null;
}
}
});})(c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56972 = [null,null,null,null,null,null,null,null];(statearr_56972[(0)] = state_machine__5694__auto__);
(statearr_56972[(1)] = (1));
return statearr_56972;
});
var state_machine__5694__auto____1 = (function (state_56966){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56966);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56973){if((e56973 instanceof Object))
{var ex__5697__auto__ = e56973;var statearr_56974_56997 = state_56966;(statearr_56974_56997[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56998 = state_56966;
state_56966 = G__56998;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56966){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_56975 = f__5709__auto__.call(null);(statearr_56975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__56955,map__56955__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__56999){var map__57004 = p__56999;var map__57004__$1 = ((cljs.core.seq_QMARK_.call(null,map__57004))?cljs.core.apply.call(null,cljs.core.hash_map,map__57004):map__57004);var opts = map__57004__$1;var on_compile_fail = cljs.core.get.call(null,map__57004__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__57004__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__57004__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__57004__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__57005 = cljs.core._EQ_;var expr__57006 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__57005.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__57006)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__57005.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__57006)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__57005.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__57006)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__57004,map__57004__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj57011 = {"detail":url};return obj57011;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__57012){var map__57014 = p__57012;var map__57014__$1 = ((cljs.core.seq_QMARK_.call(null,map__57014))?cljs.core.apply.call(null,cljs.core.hash_map,map__57014):map__57014);var class$ = cljs.core.get.call(null,map__57014__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__57014__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__57015){var map__57021 = p__57015;var map__57021__$1 = ((cljs.core.seq_QMARK_.call(null,map__57021))?cljs.core.apply.call(null,cljs.core.hash_map,map__57021):map__57021);var ed = map__57021__$1;var exception_data = cljs.core.get.call(null,map__57021__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__57021__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__57022_57026 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__57023_57027 = null;var count__57024_57028 = (0);var i__57025_57029 = (0);while(true){
if((i__57025_57029 < count__57024_57028))
{var msg_57030 = cljs.core._nth.call(null,chunk__57023_57027,i__57025_57029);console.log(msg_57030);
{
var G__57031 = seq__57022_57026;
var G__57032 = chunk__57023_57027;
var G__57033 = count__57024_57028;
var G__57034 = (i__57025_57029 + (1));
seq__57022_57026 = G__57031;
chunk__57023_57027 = G__57032;
count__57024_57028 = G__57033;
i__57025_57029 = G__57034;
continue;
}
} else
{var temp__4126__auto___57035 = cljs.core.seq.call(null,seq__57022_57026);if(temp__4126__auto___57035)
{var seq__57022_57036__$1 = temp__4126__auto___57035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57022_57036__$1))
{var c__4314__auto___57037 = cljs.core.chunk_first.call(null,seq__57022_57036__$1);{
var G__57038 = cljs.core.chunk_rest.call(null,seq__57022_57036__$1);
var G__57039 = c__4314__auto___57037;
var G__57040 = cljs.core.count.call(null,c__4314__auto___57037);
var G__57041 = (0);
seq__57022_57026 = G__57038;
chunk__57023_57027 = G__57039;
count__57024_57028 = G__57040;
i__57025_57029 = G__57041;
continue;
}
} else
{var msg_57042 = cljs.core.first.call(null,seq__57022_57036__$1);console.log(msg_57042);
{
var G__57043 = cljs.core.next.call(null,seq__57022_57036__$1);
var G__57044 = null;
var G__57045 = (0);
var G__57046 = (0);
seq__57022_57026 = G__57043;
chunk__57023_57027 = G__57044;
count__57024_57028 = G__57045;
i__57025_57029 = G__57046;
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
var watch_and_reload__delegate = function (p__57047){var map__57049 = p__57047;var map__57049__$1 = ((cljs.core.seq_QMARK_.call(null,map__57049))?cljs.core.apply.call(null,cljs.core.hash_map,map__57049):map__57049);var opts = map__57049__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__57047 = null;if (arguments.length > 0) {
  p__57047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__57047);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__57050){
var p__57047 = cljs.core.seq(arglist__57050);
return watch_and_reload__delegate(p__57047);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map