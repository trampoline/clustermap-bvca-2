// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.mount');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.mount.make_sequential = (function make_sequential(v){if((v == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return v;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_32457 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3625__auto__ = path;if(cljs.core.truth_(and__3625__auto__))
{return paths;
} else
{return and__3625__auto__;
}
})()))
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_.call(null,paths))
{var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_32457){
return (function iter__32458(s__32459){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_32457){
return (function (){var s__32459__$1 = s__32459;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32459__$1);if(temp__4126__auto__)
{var s__32459__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32459__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__32459__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__32461 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__32460 = (0);while(true){
if((i__32460 < size__4374__auto__))
{var path__$1 = cljs.core._nth.call(null,c__4373__auto__,i__32460);cljs.core.chunk_append.call(null,b__32461,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)));
{
var G__32470 = (i__32460 + (1));
i__32460 = G__32470;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32461),iter__32458.call(null,cljs.core.chunk_rest.call(null,s__32459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32461),null);
}
} else
{var path__$1 = cljs.core.first.call(null,s__32459__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)),iter__32458.call(null,cljs.core.rest.call(null,s__32459__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_32457))
,null,null));
});})(_STAR_read_enabled_STAR_32457))
;return iter__4375__auto__.call(null,paths);
} else
{if(cljs.core.map_QMARK_.call(null,paths))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_32457){
return (function iter__32462(s__32463){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_32457){
return (function (){var s__32463__$1 = s__32463;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32463__$1);if(temp__4126__auto__)
{var s__32463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32463__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__32463__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__32465 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__32464 = (0);while(true){
if((i__32464 < size__4374__auto__))
{var vec__32468 = cljs.core._nth.call(null,c__4373__auto__,i__32464);var key = cljs.core.nth.call(null,vec__32468,(0),null);var path__$1 = cljs.core.nth.call(null,vec__32468,(1),null);cljs.core.chunk_append.call(null,b__32465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null));
{
var G__32471 = (i__32464 + (1));
i__32464 = G__32471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32465),iter__32462.call(null,cljs.core.chunk_rest.call(null,s__32463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32465),null);
}
} else
{var vec__32469 = cljs.core.first.call(null,s__32463__$2);var key = cljs.core.nth.call(null,vec__32469,(0),null);var path__$1 = cljs.core.nth.call(null,vec__32469,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null),iter__32462.call(null,cljs.core.rest.call(null,s__32463__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_32457))
,null,null));
});})(_STAR_read_enabled_STAR_32457))
;return iter__4375__auto__.call(null,paths);
})());
} else
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"what are those paths ? :",paths),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_32457;
}});
clustermap.components.mount.extract_paths = (function extract_paths(cname,path,paths,cursor){var x = clustermap.components.mount.extract_paths_STAR_.call(null,path,paths,cursor);if(cljs.core.truth_(x))
{return x;
} else
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: nil cursor",cname,path,paths], null)));
return null;

}
});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (cname,f,value,p__32472){var map__32474 = p__32472;var map__32474__$1 = ((cljs.core.seq_QMARK_.call(null,map__32474))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);var options = map__32474__$1;var paths = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);var cursor_fn = cljs.core.partial.call(null,clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"paths","paths",-1807389588)),new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"fn","fn",-1175266204),cursor_fn);return om.core.root.call(null,f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__32472 = null;if (arguments.length > 3) {
  p__32472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__32472);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__32475){
var cname = cljs.core.first(arglist__32475);
arglist__32475 = cljs.core.next(arglist__32475);
var f = cljs.core.first(arglist__32475);
arglist__32475 = cljs.core.next(arglist__32475);
var value = cljs.core.first(arglist__32475);
var p__32472 = cljs.core.rest(arglist__32475);
return mount__delegate(cname,f,value,p__32472);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__32476){var map__32478 = p__32476;var map__32478__$1 = ((cljs.core.seq_QMARK_.call(null,map__32478))?cljs.core.apply.call(null,cljs.core.hash_map,map__32478):map__32478);var target = cljs.core.get.call(null,map__32478__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);return om.core.detach_root.call(null,target__$1);
};
var unmount = function (var_args){
var p__32476 = null;if (arguments.length > 0) {
  p__32476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__32476);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__32479){
var p__32476 = cljs.core.seq(arglist__32479);
return unmount__delegate(p__32476);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
