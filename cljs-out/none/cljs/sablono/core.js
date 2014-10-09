// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__58843__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__58842 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__58842,(0),null);var body = cljs.core.nthnext.call(null,vec__58842,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__58843 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__58843__delegate.call(this,args);};
G__58843.cljs$lang$maxFixedArity = 0;
G__58843.cljs$lang$applyTo = (function (arglist__58844){
var args = cljs.core.seq(arglist__58844);
return G__58843__delegate(args);
});
G__58843.cljs$core$IFn$_invoke$arity$variadic = G__58843__delegate;
return G__58843;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__58849(s__58850){return (new cljs.core.LazySeq(null,(function (){var s__58850__$1 = s__58850;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58850__$1);if(temp__4126__auto__)
{var s__58850__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58850__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58850__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58852 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58851 = (0);while(true){
if((i__58851 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__58851);cljs.core.chunk_append.call(null,b__58852,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__58853 = (i__58851 + (1));
i__58851 = G__58853;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58852),iter__58849.call(null,cljs.core.chunk_rest.call(null,s__58850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58852),null);
}
} else
{var args = cljs.core.first.call(null,s__58850__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__58849.call(null,cljs.core.rest.call(null,s__58850__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__58858(s__58859){return (new cljs.core.LazySeq(null,(function (){var s__58859__$1 = s__58859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58859__$1);if(temp__4126__auto__)
{var s__58859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58859__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58859__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58861 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58860 = (0);while(true){
if((i__58860 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__58860);cljs.core.chunk_append.call(null,b__58861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__58862 = (i__58860 + (1));
i__58860 = G__58862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58861),iter__58858.call(null,cljs.core.chunk_rest.call(null,s__58859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58861),null);
}
} else
{var style = cljs.core.first.call(null,s__58859__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__58858.call(null,cljs.core.rest.call(null,s__58859__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__58863){
var styles = cljs.core.seq(arglist__58863);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to58864 = (function() { 
var link_to58864__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to58864 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to58864__delegate.call(this,url,content);};
link_to58864.cljs$lang$maxFixedArity = 1;
link_to58864.cljs$lang$applyTo = (function (arglist__58865){
var url = cljs.core.first(arglist__58865);
var content = cljs.core.rest(arglist__58865);
return link_to58864__delegate(url,content);
});
link_to58864.cljs$core$IFn$_invoke$arity$variadic = link_to58864__delegate;
return link_to58864;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to58864);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to58866 = (function() { 
var mail_to58866__delegate = function (e_mail,p__58867){var vec__58869 = p__58867;var content = cljs.core.nth.call(null,vec__58869,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to58866 = function (e_mail,var_args){
var p__58867 = null;if (arguments.length > 1) {
  p__58867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to58866__delegate.call(this,e_mail,p__58867);};
mail_to58866.cljs$lang$maxFixedArity = 1;
mail_to58866.cljs$lang$applyTo = (function (arglist__58870){
var e_mail = cljs.core.first(arglist__58870);
var p__58867 = cljs.core.rest(arglist__58870);
return mail_to58866__delegate(e_mail,p__58867);
});
mail_to58866.cljs$core$IFn$_invoke$arity$variadic = mail_to58866__delegate;
return mail_to58866;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to58866);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list58871 = (function unordered_list58871(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__58876(s__58877){return (new cljs.core.LazySeq(null,(function (){var s__58877__$1 = s__58877;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58877__$1);if(temp__4126__auto__)
{var s__58877__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58877__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58877__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58879 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58878 = (0);while(true){
if((i__58878 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58878);cljs.core.chunk_append.call(null,b__58879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__58880 = (i__58878 + (1));
i__58878 = G__58880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58879),iter__58876.call(null,cljs.core.chunk_rest.call(null,s__58877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58879),null);
}
} else
{var x = cljs.core.first.call(null,s__58877__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__58876.call(null,cljs.core.rest.call(null,s__58877__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list58871);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list58881 = (function ordered_list58881(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__58886(s__58887){return (new cljs.core.LazySeq(null,(function (){var s__58887__$1 = s__58887;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58887__$1);if(temp__4126__auto__)
{var s__58887__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58887__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58887__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58889 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58888 = (0);while(true){
if((i__58888 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58888);cljs.core.chunk_append.call(null,b__58889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__58890 = (i__58888 + (1));
i__58888 = G__58890;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58889),iter__58886.call(null,cljs.core.chunk_rest.call(null,s__58887__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58889),null);
}
} else
{var x = cljs.core.first.call(null,s__58887__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__58886.call(null,cljs.core.rest.call(null,s__58887__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list58881);
/**
* Create an image element.
*/
sablono.core.image58891 = (function() {
var image58891 = null;
var image58891__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image58891__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image58891 = function(src,alt){
switch(arguments.length){
case 1:
return image58891__1.call(this,src);
case 2:
return image58891__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image58891.cljs$core$IFn$_invoke$arity$1 = image58891__1;
image58891.cljs$core$IFn$_invoke$arity$2 = image58891__2;
return image58891;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image58891);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__58892_SHARP_,p2__58893_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58892_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__58893_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__58894_SHARP_,p2__58895_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58894_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__58895_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field58896 = (function() {
var color_field58896 = null;
var color_field58896__1 = (function (name__10239__auto__){return color_field58896.call(null,name__10239__auto__,null);
});
var color_field58896__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field58896 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field58896__1.call(this,name__10239__auto__);
case 2:
return color_field58896__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field58896.cljs$core$IFn$_invoke$arity$1 = color_field58896__1;
color_field58896.cljs$core$IFn$_invoke$arity$2 = color_field58896__2;
return color_field58896;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field58896);
/**
* Creates a date input field.
*/
sablono.core.date_field58897 = (function() {
var date_field58897 = null;
var date_field58897__1 = (function (name__10239__auto__){return date_field58897.call(null,name__10239__auto__,null);
});
var date_field58897__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field58897 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field58897__1.call(this,name__10239__auto__);
case 2:
return date_field58897__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field58897.cljs$core$IFn$_invoke$arity$1 = date_field58897__1;
date_field58897.cljs$core$IFn$_invoke$arity$2 = date_field58897__2;
return date_field58897;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field58897);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field58898 = (function() {
var datetime_field58898 = null;
var datetime_field58898__1 = (function (name__10239__auto__){return datetime_field58898.call(null,name__10239__auto__,null);
});
var datetime_field58898__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field58898 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field58898__1.call(this,name__10239__auto__);
case 2:
return datetime_field58898__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field58898.cljs$core$IFn$_invoke$arity$1 = datetime_field58898__1;
datetime_field58898.cljs$core$IFn$_invoke$arity$2 = datetime_field58898__2;
return datetime_field58898;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field58898);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field58899 = (function() {
var datetime_local_field58899 = null;
var datetime_local_field58899__1 = (function (name__10239__auto__){return datetime_local_field58899.call(null,name__10239__auto__,null);
});
var datetime_local_field58899__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field58899 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field58899__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field58899__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field58899.cljs$core$IFn$_invoke$arity$1 = datetime_local_field58899__1;
datetime_local_field58899.cljs$core$IFn$_invoke$arity$2 = datetime_local_field58899__2;
return datetime_local_field58899;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field58899);
/**
* Creates a email input field.
*/
sablono.core.email_field58900 = (function() {
var email_field58900 = null;
var email_field58900__1 = (function (name__10239__auto__){return email_field58900.call(null,name__10239__auto__,null);
});
var email_field58900__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field58900 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field58900__1.call(this,name__10239__auto__);
case 2:
return email_field58900__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field58900.cljs$core$IFn$_invoke$arity$1 = email_field58900__1;
email_field58900.cljs$core$IFn$_invoke$arity$2 = email_field58900__2;
return email_field58900;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field58900);
/**
* Creates a file input field.
*/
sablono.core.file_field58901 = (function() {
var file_field58901 = null;
var file_field58901__1 = (function (name__10239__auto__){return file_field58901.call(null,name__10239__auto__,null);
});
var file_field58901__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field58901 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field58901__1.call(this,name__10239__auto__);
case 2:
return file_field58901__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field58901.cljs$core$IFn$_invoke$arity$1 = file_field58901__1;
file_field58901.cljs$core$IFn$_invoke$arity$2 = file_field58901__2;
return file_field58901;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field58901);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field58902 = (function() {
var hidden_field58902 = null;
var hidden_field58902__1 = (function (name__10239__auto__){return hidden_field58902.call(null,name__10239__auto__,null);
});
var hidden_field58902__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field58902 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field58902__1.call(this,name__10239__auto__);
case 2:
return hidden_field58902__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field58902.cljs$core$IFn$_invoke$arity$1 = hidden_field58902__1;
hidden_field58902.cljs$core$IFn$_invoke$arity$2 = hidden_field58902__2;
return hidden_field58902;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field58902);
/**
* Creates a month input field.
*/
sablono.core.month_field58903 = (function() {
var month_field58903 = null;
var month_field58903__1 = (function (name__10239__auto__){return month_field58903.call(null,name__10239__auto__,null);
});
var month_field58903__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field58903 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field58903__1.call(this,name__10239__auto__);
case 2:
return month_field58903__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field58903.cljs$core$IFn$_invoke$arity$1 = month_field58903__1;
month_field58903.cljs$core$IFn$_invoke$arity$2 = month_field58903__2;
return month_field58903;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field58903);
/**
* Creates a number input field.
*/
sablono.core.number_field58904 = (function() {
var number_field58904 = null;
var number_field58904__1 = (function (name__10239__auto__){return number_field58904.call(null,name__10239__auto__,null);
});
var number_field58904__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field58904 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field58904__1.call(this,name__10239__auto__);
case 2:
return number_field58904__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field58904.cljs$core$IFn$_invoke$arity$1 = number_field58904__1;
number_field58904.cljs$core$IFn$_invoke$arity$2 = number_field58904__2;
return number_field58904;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field58904);
/**
* Creates a password input field.
*/
sablono.core.password_field58905 = (function() {
var password_field58905 = null;
var password_field58905__1 = (function (name__10239__auto__){return password_field58905.call(null,name__10239__auto__,null);
});
var password_field58905__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field58905 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field58905__1.call(this,name__10239__auto__);
case 2:
return password_field58905__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field58905.cljs$core$IFn$_invoke$arity$1 = password_field58905__1;
password_field58905.cljs$core$IFn$_invoke$arity$2 = password_field58905__2;
return password_field58905;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field58905);
/**
* Creates a range input field.
*/
sablono.core.range_field58906 = (function() {
var range_field58906 = null;
var range_field58906__1 = (function (name__10239__auto__){return range_field58906.call(null,name__10239__auto__,null);
});
var range_field58906__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field58906 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field58906__1.call(this,name__10239__auto__);
case 2:
return range_field58906__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field58906.cljs$core$IFn$_invoke$arity$1 = range_field58906__1;
range_field58906.cljs$core$IFn$_invoke$arity$2 = range_field58906__2;
return range_field58906;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field58906);
/**
* Creates a search input field.
*/
sablono.core.search_field58907 = (function() {
var search_field58907 = null;
var search_field58907__1 = (function (name__10239__auto__){return search_field58907.call(null,name__10239__auto__,null);
});
var search_field58907__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field58907 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field58907__1.call(this,name__10239__auto__);
case 2:
return search_field58907__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field58907.cljs$core$IFn$_invoke$arity$1 = search_field58907__1;
search_field58907.cljs$core$IFn$_invoke$arity$2 = search_field58907__2;
return search_field58907;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field58907);
/**
* Creates a tel input field.
*/
sablono.core.tel_field58908 = (function() {
var tel_field58908 = null;
var tel_field58908__1 = (function (name__10239__auto__){return tel_field58908.call(null,name__10239__auto__,null);
});
var tel_field58908__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field58908 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field58908__1.call(this,name__10239__auto__);
case 2:
return tel_field58908__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field58908.cljs$core$IFn$_invoke$arity$1 = tel_field58908__1;
tel_field58908.cljs$core$IFn$_invoke$arity$2 = tel_field58908__2;
return tel_field58908;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field58908);
/**
* Creates a text input field.
*/
sablono.core.text_field58909 = (function() {
var text_field58909 = null;
var text_field58909__1 = (function (name__10239__auto__){return text_field58909.call(null,name__10239__auto__,null);
});
var text_field58909__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field58909 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field58909__1.call(this,name__10239__auto__);
case 2:
return text_field58909__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field58909.cljs$core$IFn$_invoke$arity$1 = text_field58909__1;
text_field58909.cljs$core$IFn$_invoke$arity$2 = text_field58909__2;
return text_field58909;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field58909);
/**
* Creates a time input field.
*/
sablono.core.time_field58910 = (function() {
var time_field58910 = null;
var time_field58910__1 = (function (name__10239__auto__){return time_field58910.call(null,name__10239__auto__,null);
});
var time_field58910__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field58910 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field58910__1.call(this,name__10239__auto__);
case 2:
return time_field58910__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field58910.cljs$core$IFn$_invoke$arity$1 = time_field58910__1;
time_field58910.cljs$core$IFn$_invoke$arity$2 = time_field58910__2;
return time_field58910;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field58910);
/**
* Creates a url input field.
*/
sablono.core.url_field58911 = (function() {
var url_field58911 = null;
var url_field58911__1 = (function (name__10239__auto__){return url_field58911.call(null,name__10239__auto__,null);
});
var url_field58911__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field58911 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field58911__1.call(this,name__10239__auto__);
case 2:
return url_field58911__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field58911.cljs$core$IFn$_invoke$arity$1 = url_field58911__1;
url_field58911.cljs$core$IFn$_invoke$arity$2 = url_field58911__2;
return url_field58911;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field58911);
/**
* Creates a week input field.
*/
sablono.core.week_field58912 = (function() {
var week_field58912 = null;
var week_field58912__1 = (function (name__10239__auto__){return week_field58912.call(null,name__10239__auto__,null);
});
var week_field58912__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field58912 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field58912__1.call(this,name__10239__auto__);
case 2:
return week_field58912__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field58912.cljs$core$IFn$_invoke$arity$1 = week_field58912__1;
week_field58912.cljs$core$IFn$_invoke$arity$2 = week_field58912__2;
return week_field58912;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field58912);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box58913 = (function() {
var check_box58913 = null;
var check_box58913__1 = (function (name){return check_box58913.call(null,name,null);
});
var check_box58913__2 = (function (name,checked_QMARK_){return check_box58913.call(null,name,checked_QMARK_,"true");
});
var check_box58913__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box58913 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box58913__1.call(this,name);
case 2:
return check_box58913__2.call(this,name,checked_QMARK_);
case 3:
return check_box58913__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box58913.cljs$core$IFn$_invoke$arity$1 = check_box58913__1;
check_box58913.cljs$core$IFn$_invoke$arity$2 = check_box58913__2;
check_box58913.cljs$core$IFn$_invoke$arity$3 = check_box58913__3;
return check_box58913;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box58913);
/**
* Creates a radio button.
*/
sablono.core.radio_button58914 = (function() {
var radio_button58914 = null;
var radio_button58914__1 = (function (group){return radio_button58914.call(null,group,null);
});
var radio_button58914__2 = (function (group,checked_QMARK_){return radio_button58914.call(null,group,checked_QMARK_,"true");
});
var radio_button58914__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button58914 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button58914__1.call(this,group);
case 2:
return radio_button58914__2.call(this,group,checked_QMARK_);
case 3:
return radio_button58914__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button58914.cljs$core$IFn$_invoke$arity$1 = radio_button58914__1;
radio_button58914.cljs$core$IFn$_invoke$arity$2 = radio_button58914__2;
radio_button58914.cljs$core$IFn$_invoke$arity$3 = radio_button58914__3;
return radio_button58914;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button58914);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options58915 = (function() {
var select_options58915 = null;
var select_options58915__1 = (function (coll){return select_options58915.call(null,coll,null);
});
var select_options58915__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__58924(s__58925){return (new cljs.core.LazySeq(null,(function (){var s__58925__$1 = s__58925;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58925__$1);if(temp__4126__auto__)
{var s__58925__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58925__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58925__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58927 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58926 = (0);while(true){
if((i__58926 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58926);cljs.core.chunk_append.call(null,b__58927,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__58930 = x;var text = cljs.core.nth.call(null,vec__58930,(0),null);var val = cljs.core.nth.call(null,vec__58930,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__58930,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options58915.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__58932 = (i__58926 + (1));
i__58926 = G__58932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58927),iter__58924.call(null,cljs.core.chunk_rest.call(null,s__58925__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58927),null);
}
} else
{var x = cljs.core.first.call(null,s__58925__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__58931 = x;var text = cljs.core.nth.call(null,vec__58931,(0),null);var val = cljs.core.nth.call(null,vec__58931,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__58931,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options58915.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__58924.call(null,cljs.core.rest.call(null,s__58925__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options58915 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options58915__1.call(this,coll);
case 2:
return select_options58915__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options58915.cljs$core$IFn$_invoke$arity$1 = select_options58915__1;
select_options58915.cljs$core$IFn$_invoke$arity$2 = select_options58915__2;
return select_options58915;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options58915);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down58933 = (function() {
var drop_down58933 = null;
var drop_down58933__2 = (function (name,options){return drop_down58933.call(null,name,options,null);
});
var drop_down58933__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down58933 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down58933__2.call(this,name,options);
case 3:
return drop_down58933__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down58933.cljs$core$IFn$_invoke$arity$2 = drop_down58933__2;
drop_down58933.cljs$core$IFn$_invoke$arity$3 = drop_down58933__3;
return drop_down58933;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down58933);
/**
* Creates a text area element.
*/
sablono.core.text_area58934 = (function() {
var text_area58934 = null;
var text_area58934__1 = (function (name){return text_area58934.call(null,name,null);
});
var text_area58934__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area58934 = function(name,value){
switch(arguments.length){
case 1:
return text_area58934__1.call(this,name);
case 2:
return text_area58934__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area58934.cljs$core$IFn$_invoke$arity$1 = text_area58934__1;
text_area58934.cljs$core$IFn$_invoke$arity$2 = text_area58934__2;
return text_area58934;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area58934);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label58935 = (function label58935(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label58935);
/**
* Creates a submit button.
*/
sablono.core.submit_button58936 = (function submit_button58936(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button58936);
/**
* Creates a form reset button.
*/
sablono.core.reset_button58937 = (function reset_button58937(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button58937);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to58938 = (function() { 
var form_to58938__delegate = function (p__58939,body){var vec__58941 = p__58939;var method = cljs.core.nth.call(null,vec__58941,(0),null);var action = cljs.core.nth.call(null,vec__58941,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to58938 = function (p__58939,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to58938__delegate.call(this,p__58939,body);};
form_to58938.cljs$lang$maxFixedArity = 1;
form_to58938.cljs$lang$applyTo = (function (arglist__58942){
var p__58939 = cljs.core.first(arglist__58942);
var body = cljs.core.rest(arglist__58942);
return form_to58938__delegate(p__58939,body);
});
form_to58938.cljs$core$IFn$_invoke$arity$variadic = form_to58938__delegate;
return form_to58938;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to58938);

//# sourceMappingURL=core.js.map