// Compiled by ClojureScript 0.0-2261
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
var G__30004__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__30003 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__30003,(0),null);var body = cljs.core.nthnext.call(null,vec__30003,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__30004 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30004__delegate.call(this,args);};
G__30004.cljs$lang$maxFixedArity = 0;
G__30004.cljs$lang$applyTo = (function (arglist__30005){
var args = cljs.core.seq(arglist__30005);
return G__30004__delegate(args);
});
G__30004.cljs$core$IFn$_invoke$arity$variadic = G__30004__delegate;
return G__30004;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__30010(s__30011){return (new cljs.core.LazySeq(null,(function (){var s__30011__$1 = s__30011;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30011__$1);if(temp__4126__auto__)
{var s__30011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30011__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30011__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30013 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30012 = (0);while(true){
if((i__30012 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__30012);cljs.core.chunk_append.call(null,b__30013,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__30014 = (i__30012 + (1));
i__30012 = G__30014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30013),iter__30010.call(null,cljs.core.chunk_rest.call(null,s__30011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30013),null);
}
} else
{var args = cljs.core.first.call(null,s__30011__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__30010.call(null,cljs.core.rest.call(null,s__30011__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__30019(s__30020){return (new cljs.core.LazySeq(null,(function (){var s__30020__$1 = s__30020;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30020__$1);if(temp__4126__auto__)
{var s__30020__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30020__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30020__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30022 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30021 = (0);while(true){
if((i__30021 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__30021);cljs.core.chunk_append.call(null,b__30022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__30023 = (i__30021 + (1));
i__30021 = G__30023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30022),iter__30019.call(null,cljs.core.chunk_rest.call(null,s__30020__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30022),null);
}
} else
{var style = cljs.core.first.call(null,s__30020__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__30019.call(null,cljs.core.rest.call(null,s__30020__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__30024){
var styles = cljs.core.seq(arglist__30024);
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
sablono.core.link_to30025 = (function() { 
var link_to30025__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to30025 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to30025__delegate.call(this,url,content);};
link_to30025.cljs$lang$maxFixedArity = 1;
link_to30025.cljs$lang$applyTo = (function (arglist__30026){
var url = cljs.core.first(arglist__30026);
var content = cljs.core.rest(arglist__30026);
return link_to30025__delegate(url,content);
});
link_to30025.cljs$core$IFn$_invoke$arity$variadic = link_to30025__delegate;
return link_to30025;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30025);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to30027 = (function() { 
var mail_to30027__delegate = function (e_mail,p__30028){var vec__30030 = p__30028;var content = cljs.core.nth.call(null,vec__30030,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to30027 = function (e_mail,var_args){
var p__30028 = null;if (arguments.length > 1) {
  p__30028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to30027__delegate.call(this,e_mail,p__30028);};
mail_to30027.cljs$lang$maxFixedArity = 1;
mail_to30027.cljs$lang$applyTo = (function (arglist__30031){
var e_mail = cljs.core.first(arglist__30031);
var p__30028 = cljs.core.rest(arglist__30031);
return mail_to30027__delegate(e_mail,p__30028);
});
mail_to30027.cljs$core$IFn$_invoke$arity$variadic = mail_to30027__delegate;
return mail_to30027;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30027);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list30032 = (function unordered_list30032(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__30037(s__30038){return (new cljs.core.LazySeq(null,(function (){var s__30038__$1 = s__30038;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30038__$1);if(temp__4126__auto__)
{var s__30038__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30038__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30038__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30040 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30039 = (0);while(true){
if((i__30039 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30039);cljs.core.chunk_append.call(null,b__30040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30041 = (i__30039 + (1));
i__30039 = G__30041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30040),iter__30037.call(null,cljs.core.chunk_rest.call(null,s__30038__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30040),null);
}
} else
{var x = cljs.core.first.call(null,s__30038__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30037.call(null,cljs.core.rest.call(null,s__30038__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30032);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list30042 = (function ordered_list30042(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__30047(s__30048){return (new cljs.core.LazySeq(null,(function (){var s__30048__$1 = s__30048;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30048__$1);if(temp__4126__auto__)
{var s__30048__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30048__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30048__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30050 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30049 = (0);while(true){
if((i__30049 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30049);cljs.core.chunk_append.call(null,b__30050,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30051 = (i__30049 + (1));
i__30049 = G__30051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30050),iter__30047.call(null,cljs.core.chunk_rest.call(null,s__30048__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30050),null);
}
} else
{var x = cljs.core.first.call(null,s__30048__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30047.call(null,cljs.core.rest.call(null,s__30048__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30042);
/**
* Create an image element.
*/
sablono.core.image30052 = (function() {
var image30052 = null;
var image30052__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image30052__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image30052 = function(src,alt){
switch(arguments.length){
case 1:
return image30052__1.call(this,src);
case 2:
return image30052__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image30052.cljs$core$IFn$_invoke$arity$1 = image30052__1;
image30052.cljs$core$IFn$_invoke$arity$2 = image30052__2;
return image30052;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30052);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__30053_SHARP_,p2__30054_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30053_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30054_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__30055_SHARP_,p2__30056_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30055_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30056_SHARP_));
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
sablono.core.color_field30057 = (function() {
var color_field30057 = null;
var color_field30057__1 = (function (name__10211__auto__){return color_field30057.call(null,name__10211__auto__,null);
});
var color_field30057__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field30057 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field30057__1.call(this,name__10211__auto__);
case 2:
return color_field30057__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field30057.cljs$core$IFn$_invoke$arity$1 = color_field30057__1;
color_field30057.cljs$core$IFn$_invoke$arity$2 = color_field30057__2;
return color_field30057;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30057);
/**
* Creates a date input field.
*/
sablono.core.date_field30058 = (function() {
var date_field30058 = null;
var date_field30058__1 = (function (name__10211__auto__){return date_field30058.call(null,name__10211__auto__,null);
});
var date_field30058__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field30058 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field30058__1.call(this,name__10211__auto__);
case 2:
return date_field30058__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field30058.cljs$core$IFn$_invoke$arity$1 = date_field30058__1;
date_field30058.cljs$core$IFn$_invoke$arity$2 = date_field30058__2;
return date_field30058;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30058);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field30059 = (function() {
var datetime_field30059 = null;
var datetime_field30059__1 = (function (name__10211__auto__){return datetime_field30059.call(null,name__10211__auto__,null);
});
var datetime_field30059__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field30059 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field30059__1.call(this,name__10211__auto__);
case 2:
return datetime_field30059__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field30059.cljs$core$IFn$_invoke$arity$1 = datetime_field30059__1;
datetime_field30059.cljs$core$IFn$_invoke$arity$2 = datetime_field30059__2;
return datetime_field30059;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30059);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field30060 = (function() {
var datetime_local_field30060 = null;
var datetime_local_field30060__1 = (function (name__10211__auto__){return datetime_local_field30060.call(null,name__10211__auto__,null);
});
var datetime_local_field30060__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field30060 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field30060__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field30060__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field30060.cljs$core$IFn$_invoke$arity$1 = datetime_local_field30060__1;
datetime_local_field30060.cljs$core$IFn$_invoke$arity$2 = datetime_local_field30060__2;
return datetime_local_field30060;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30060);
/**
* Creates a email input field.
*/
sablono.core.email_field30061 = (function() {
var email_field30061 = null;
var email_field30061__1 = (function (name__10211__auto__){return email_field30061.call(null,name__10211__auto__,null);
});
var email_field30061__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field30061 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field30061__1.call(this,name__10211__auto__);
case 2:
return email_field30061__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field30061.cljs$core$IFn$_invoke$arity$1 = email_field30061__1;
email_field30061.cljs$core$IFn$_invoke$arity$2 = email_field30061__2;
return email_field30061;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30061);
/**
* Creates a file input field.
*/
sablono.core.file_field30062 = (function() {
var file_field30062 = null;
var file_field30062__1 = (function (name__10211__auto__){return file_field30062.call(null,name__10211__auto__,null);
});
var file_field30062__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field30062 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field30062__1.call(this,name__10211__auto__);
case 2:
return file_field30062__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field30062.cljs$core$IFn$_invoke$arity$1 = file_field30062__1;
file_field30062.cljs$core$IFn$_invoke$arity$2 = file_field30062__2;
return file_field30062;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30062);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field30063 = (function() {
var hidden_field30063 = null;
var hidden_field30063__1 = (function (name__10211__auto__){return hidden_field30063.call(null,name__10211__auto__,null);
});
var hidden_field30063__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field30063 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field30063__1.call(this,name__10211__auto__);
case 2:
return hidden_field30063__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field30063.cljs$core$IFn$_invoke$arity$1 = hidden_field30063__1;
hidden_field30063.cljs$core$IFn$_invoke$arity$2 = hidden_field30063__2;
return hidden_field30063;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30063);
/**
* Creates a month input field.
*/
sablono.core.month_field30064 = (function() {
var month_field30064 = null;
var month_field30064__1 = (function (name__10211__auto__){return month_field30064.call(null,name__10211__auto__,null);
});
var month_field30064__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field30064 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field30064__1.call(this,name__10211__auto__);
case 2:
return month_field30064__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field30064.cljs$core$IFn$_invoke$arity$1 = month_field30064__1;
month_field30064.cljs$core$IFn$_invoke$arity$2 = month_field30064__2;
return month_field30064;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30064);
/**
* Creates a number input field.
*/
sablono.core.number_field30065 = (function() {
var number_field30065 = null;
var number_field30065__1 = (function (name__10211__auto__){return number_field30065.call(null,name__10211__auto__,null);
});
var number_field30065__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field30065 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field30065__1.call(this,name__10211__auto__);
case 2:
return number_field30065__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field30065.cljs$core$IFn$_invoke$arity$1 = number_field30065__1;
number_field30065.cljs$core$IFn$_invoke$arity$2 = number_field30065__2;
return number_field30065;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30065);
/**
* Creates a password input field.
*/
sablono.core.password_field30066 = (function() {
var password_field30066 = null;
var password_field30066__1 = (function (name__10211__auto__){return password_field30066.call(null,name__10211__auto__,null);
});
var password_field30066__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field30066 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field30066__1.call(this,name__10211__auto__);
case 2:
return password_field30066__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field30066.cljs$core$IFn$_invoke$arity$1 = password_field30066__1;
password_field30066.cljs$core$IFn$_invoke$arity$2 = password_field30066__2;
return password_field30066;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30066);
/**
* Creates a range input field.
*/
sablono.core.range_field30067 = (function() {
var range_field30067 = null;
var range_field30067__1 = (function (name__10211__auto__){return range_field30067.call(null,name__10211__auto__,null);
});
var range_field30067__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field30067 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field30067__1.call(this,name__10211__auto__);
case 2:
return range_field30067__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field30067.cljs$core$IFn$_invoke$arity$1 = range_field30067__1;
range_field30067.cljs$core$IFn$_invoke$arity$2 = range_field30067__2;
return range_field30067;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30067);
/**
* Creates a search input field.
*/
sablono.core.search_field30068 = (function() {
var search_field30068 = null;
var search_field30068__1 = (function (name__10211__auto__){return search_field30068.call(null,name__10211__auto__,null);
});
var search_field30068__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field30068 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field30068__1.call(this,name__10211__auto__);
case 2:
return search_field30068__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field30068.cljs$core$IFn$_invoke$arity$1 = search_field30068__1;
search_field30068.cljs$core$IFn$_invoke$arity$2 = search_field30068__2;
return search_field30068;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30068);
/**
* Creates a tel input field.
*/
sablono.core.tel_field30069 = (function() {
var tel_field30069 = null;
var tel_field30069__1 = (function (name__10211__auto__){return tel_field30069.call(null,name__10211__auto__,null);
});
var tel_field30069__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field30069 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field30069__1.call(this,name__10211__auto__);
case 2:
return tel_field30069__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field30069.cljs$core$IFn$_invoke$arity$1 = tel_field30069__1;
tel_field30069.cljs$core$IFn$_invoke$arity$2 = tel_field30069__2;
return tel_field30069;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30069);
/**
* Creates a text input field.
*/
sablono.core.text_field30070 = (function() {
var text_field30070 = null;
var text_field30070__1 = (function (name__10211__auto__){return text_field30070.call(null,name__10211__auto__,null);
});
var text_field30070__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field30070 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field30070__1.call(this,name__10211__auto__);
case 2:
return text_field30070__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field30070.cljs$core$IFn$_invoke$arity$1 = text_field30070__1;
text_field30070.cljs$core$IFn$_invoke$arity$2 = text_field30070__2;
return text_field30070;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30070);
/**
* Creates a time input field.
*/
sablono.core.time_field30071 = (function() {
var time_field30071 = null;
var time_field30071__1 = (function (name__10211__auto__){return time_field30071.call(null,name__10211__auto__,null);
});
var time_field30071__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field30071 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field30071__1.call(this,name__10211__auto__);
case 2:
return time_field30071__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field30071.cljs$core$IFn$_invoke$arity$1 = time_field30071__1;
time_field30071.cljs$core$IFn$_invoke$arity$2 = time_field30071__2;
return time_field30071;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30071);
/**
* Creates a url input field.
*/
sablono.core.url_field30072 = (function() {
var url_field30072 = null;
var url_field30072__1 = (function (name__10211__auto__){return url_field30072.call(null,name__10211__auto__,null);
});
var url_field30072__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field30072 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field30072__1.call(this,name__10211__auto__);
case 2:
return url_field30072__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field30072.cljs$core$IFn$_invoke$arity$1 = url_field30072__1;
url_field30072.cljs$core$IFn$_invoke$arity$2 = url_field30072__2;
return url_field30072;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30072);
/**
* Creates a week input field.
*/
sablono.core.week_field30073 = (function() {
var week_field30073 = null;
var week_field30073__1 = (function (name__10211__auto__){return week_field30073.call(null,name__10211__auto__,null);
});
var week_field30073__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field30073 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field30073__1.call(this,name__10211__auto__);
case 2:
return week_field30073__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field30073.cljs$core$IFn$_invoke$arity$1 = week_field30073__1;
week_field30073.cljs$core$IFn$_invoke$arity$2 = week_field30073__2;
return week_field30073;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30073);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box30074 = (function() {
var check_box30074 = null;
var check_box30074__1 = (function (name){return check_box30074.call(null,name,null);
});
var check_box30074__2 = (function (name,checked_QMARK_){return check_box30074.call(null,name,checked_QMARK_,"true");
});
var check_box30074__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box30074 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box30074__1.call(this,name);
case 2:
return check_box30074__2.call(this,name,checked_QMARK_);
case 3:
return check_box30074__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box30074.cljs$core$IFn$_invoke$arity$1 = check_box30074__1;
check_box30074.cljs$core$IFn$_invoke$arity$2 = check_box30074__2;
check_box30074.cljs$core$IFn$_invoke$arity$3 = check_box30074__3;
return check_box30074;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30074);
/**
* Creates a radio button.
*/
sablono.core.radio_button30075 = (function() {
var radio_button30075 = null;
var radio_button30075__1 = (function (group){return radio_button30075.call(null,group,null);
});
var radio_button30075__2 = (function (group,checked_QMARK_){return radio_button30075.call(null,group,checked_QMARK_,"true");
});
var radio_button30075__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button30075 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button30075__1.call(this,group);
case 2:
return radio_button30075__2.call(this,group,checked_QMARK_);
case 3:
return radio_button30075__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button30075.cljs$core$IFn$_invoke$arity$1 = radio_button30075__1;
radio_button30075.cljs$core$IFn$_invoke$arity$2 = radio_button30075__2;
radio_button30075.cljs$core$IFn$_invoke$arity$3 = radio_button30075__3;
return radio_button30075;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30075);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options30076 = (function() {
var select_options30076 = null;
var select_options30076__1 = (function (coll){return select_options30076.call(null,coll,null);
});
var select_options30076__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__30085(s__30086){return (new cljs.core.LazySeq(null,(function (){var s__30086__$1 = s__30086;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30086__$1);if(temp__4126__auto__)
{var s__30086__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30086__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30086__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30088 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30087 = (0);while(true){
if((i__30087 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30087);cljs.core.chunk_append.call(null,b__30088,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30091 = x;var text = cljs.core.nth.call(null,vec__30091,(0),null);var val = cljs.core.nth.call(null,vec__30091,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30091,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30076.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__30093 = (i__30087 + (1));
i__30087 = G__30093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30088),iter__30085.call(null,cljs.core.chunk_rest.call(null,s__30086__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30088),null);
}
} else
{var x = cljs.core.first.call(null,s__30086__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30092 = x;var text = cljs.core.nth.call(null,vec__30092,(0),null);var val = cljs.core.nth.call(null,vec__30092,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30092,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30076.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__30085.call(null,cljs.core.rest.call(null,s__30086__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options30076 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options30076__1.call(this,coll);
case 2:
return select_options30076__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options30076.cljs$core$IFn$_invoke$arity$1 = select_options30076__1;
select_options30076.cljs$core$IFn$_invoke$arity$2 = select_options30076__2;
return select_options30076;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30076);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down30094 = (function() {
var drop_down30094 = null;
var drop_down30094__2 = (function (name,options){return drop_down30094.call(null,name,options,null);
});
var drop_down30094__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down30094 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down30094__2.call(this,name,options);
case 3:
return drop_down30094__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down30094.cljs$core$IFn$_invoke$arity$2 = drop_down30094__2;
drop_down30094.cljs$core$IFn$_invoke$arity$3 = drop_down30094__3;
return drop_down30094;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30094);
/**
* Creates a text area element.
*/
sablono.core.text_area30095 = (function() {
var text_area30095 = null;
var text_area30095__1 = (function (name){return text_area30095.call(null,name,null);
});
var text_area30095__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area30095 = function(name,value){
switch(arguments.length){
case 1:
return text_area30095__1.call(this,name);
case 2:
return text_area30095__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area30095.cljs$core$IFn$_invoke$arity$1 = text_area30095__1;
text_area30095.cljs$core$IFn$_invoke$arity$2 = text_area30095__2;
return text_area30095;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30095);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label30096 = (function label30096(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30096);
/**
* Creates a submit button.
*/
sablono.core.submit_button30097 = (function submit_button30097(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30097);
/**
* Creates a form reset button.
*/
sablono.core.reset_button30098 = (function reset_button30098(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30098);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to30099 = (function() { 
var form_to30099__delegate = function (p__30100,body){var vec__30102 = p__30100;var method = cljs.core.nth.call(null,vec__30102,(0),null);var action = cljs.core.nth.call(null,vec__30102,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to30099 = function (p__30100,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to30099__delegate.call(this,p__30100,body);};
form_to30099.cljs$lang$maxFixedArity = 1;
form_to30099.cljs$lang$applyTo = (function (arglist__30103){
var p__30100 = cljs.core.first(arglist__30103);
var body = cljs.core.rest(arglist__30103);
return form_to30099__delegate(p__30100,body);
});
form_to30099.cljs$core$IFn$_invoke$arity$variadic = form_to30099__delegate;
return form_to30099;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30099);
