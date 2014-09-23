// Compiled by ClojureScript 0.0-2322
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
clustermap.components.mount.extract_paths = (function extract_paths(path,paths,cursor){var _STAR_read_enabled_STAR_51228 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_.call(null,paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_51228){
return (function iter__51229(s__51230){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_51228){
return (function (){var s__51230__$1 = s__51230;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51230__$1);if(temp__4126__auto__)
{var s__51230__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51230__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51230__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51232 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51231 = (0);while(true){
if((i__51231 < size__4282__auto__))
{var path__$1 = cljs.core._nth.call(null,c__4281__auto__,i__51231);cljs.core.chunk_append.call(null,b__51232,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)));
{
var G__51241 = (i__51231 + (1));
i__51231 = G__51241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51232),iter__51229.call(null,cljs.core.chunk_rest.call(null,s__51230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51232),null);
}
} else
{var path__$1 = cljs.core.first.call(null,s__51230__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)),iter__51229.call(null,cljs.core.rest.call(null,s__51230__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_51228))
,null,null));
});})(_STAR_read_enabled_STAR_51228))
;return iter__4283__auto__.call(null,paths);
} else
{if(cljs.core.map_QMARK_.call(null,paths))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_51228){
return (function iter__51233(s__51234){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_51228){
return (function (){var s__51234__$1 = s__51234;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51234__$1);if(temp__4126__auto__)
{var s__51234__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51234__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51234__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51236 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51235 = (0);while(true){
if((i__51235 < size__4282__auto__))
{var vec__51239 = cljs.core._nth.call(null,c__4281__auto__,i__51235);var key = cljs.core.nth.call(null,vec__51239,(0),null);var path__$1 = cljs.core.nth.call(null,vec__51239,(1),null);cljs.core.chunk_append.call(null,b__51236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null));
{
var G__51242 = (i__51235 + (1));
i__51235 = G__51242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51236),iter__51233.call(null,cljs.core.chunk_rest.call(null,s__51234__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51236),null);
}
} else
{var vec__51240 = cljs.core.first.call(null,s__51234__$2);var key = cljs.core.nth.call(null,vec__51240,(0),null);var path__$1 = cljs.core.nth.call(null,vec__51240,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null),iter__51233.call(null,cljs.core.rest.call(null,s__51234__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_51228))
,null,null));
});})(_STAR_read_enabled_STAR_51228))
;return iter__4283__auto__.call(null,paths);
})());
} else
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"what are those paths ? :",paths),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_51228;
}});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (f,value,p__51243){var map__51245 = p__51243;var map__51245__$1 = ((cljs.core.seq_QMARK_.call(null,map__51245))?cljs.core.apply.call(null,cljs.core.hash_map,map__51245):map__51245);var options = map__51245__$1;var paths = cljs.core.get.call(null,map__51245__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path = cljs.core.get.call(null,map__51245__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target = cljs.core.get.call(null,map__51245__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);var cursor_fn = cljs.core.partial.call(null,clustermap.components.mount.extract_paths,path,paths);var options__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"paths","paths",-1807389588)),new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"fn","fn",-1175266204),cursor_fn);return om.core.root.call(null,f,value,options__$1);
};
var mount = function (f,value,var_args){
var p__51243 = null;if (arguments.length > 2) {
  p__51243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return mount__delegate.call(this,f,value,p__51243);};
mount.cljs$lang$maxFixedArity = 2;
mount.cljs$lang$applyTo = (function (arglist__51246){
var f = cljs.core.first(arglist__51246);
arglist__51246 = cljs.core.next(arglist__51246);
var value = cljs.core.first(arglist__51246);
var p__51243 = cljs.core.rest(arglist__51246);
return mount__delegate(f,value,p__51243);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;

//# sourceMappingURL=mount.js.map