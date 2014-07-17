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
var G__53964__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__53963 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__53963,(0),null);var body = cljs.core.nthnext.call(null,vec__53963,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__53964 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__53964__delegate.call(this,args);};
G__53964.cljs$lang$maxFixedArity = 0;
G__53964.cljs$lang$applyTo = (function (arglist__53965){
var args = cljs.core.seq(arglist__53965);
return G__53964__delegate(args);
});
G__53964.cljs$core$IFn$_invoke$arity$variadic = G__53964__delegate;
return G__53964;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__53970(s__53971){return (new cljs.core.LazySeq(null,(function (){var s__53971__$1 = s__53971;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53971__$1);if(temp__4126__auto__)
{var s__53971__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53971__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53971__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53973 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53972 = (0);while(true){
if((i__53972 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__53972);cljs.core.chunk_append.call(null,b__53973,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__53974 = (i__53972 + (1));
i__53972 = G__53974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53973),iter__53970.call(null,cljs.core.chunk_rest.call(null,s__53971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53973),null);
}
} else
{var args = cljs.core.first.call(null,s__53971__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__53970.call(null,cljs.core.rest.call(null,s__53971__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__53979(s__53980){return (new cljs.core.LazySeq(null,(function (){var s__53980__$1 = s__53980;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53980__$1);if(temp__4126__auto__)
{var s__53980__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53980__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53980__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53982 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53981 = (0);while(true){
if((i__53981 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__53981);cljs.core.chunk_append.call(null,b__53982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__53983 = (i__53981 + (1));
i__53981 = G__53983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53982),iter__53979.call(null,cljs.core.chunk_rest.call(null,s__53980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53982),null);
}
} else
{var style = cljs.core.first.call(null,s__53980__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__53979.call(null,cljs.core.rest.call(null,s__53980__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__53984){
var styles = cljs.core.seq(arglist__53984);
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
sablono.core.link_to53985 = (function() { 
var link_to53985__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to53985 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to53985__delegate.call(this,url,content);};
link_to53985.cljs$lang$maxFixedArity = 1;
link_to53985.cljs$lang$applyTo = (function (arglist__53986){
var url = cljs.core.first(arglist__53986);
var content = cljs.core.rest(arglist__53986);
return link_to53985__delegate(url,content);
});
link_to53985.cljs$core$IFn$_invoke$arity$variadic = link_to53985__delegate;
return link_to53985;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to53985);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to53987 = (function() { 
var mail_to53987__delegate = function (e_mail,p__53988){var vec__53990 = p__53988;var content = cljs.core.nth.call(null,vec__53990,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to53987 = function (e_mail,var_args){
var p__53988 = null;if (arguments.length > 1) {
  p__53988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to53987__delegate.call(this,e_mail,p__53988);};
mail_to53987.cljs$lang$maxFixedArity = 1;
mail_to53987.cljs$lang$applyTo = (function (arglist__53991){
var e_mail = cljs.core.first(arglist__53991);
var p__53988 = cljs.core.rest(arglist__53991);
return mail_to53987__delegate(e_mail,p__53988);
});
mail_to53987.cljs$core$IFn$_invoke$arity$variadic = mail_to53987__delegate;
return mail_to53987;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to53987);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list53992 = (function unordered_list53992(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__53997(s__53998){return (new cljs.core.LazySeq(null,(function (){var s__53998__$1 = s__53998;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53998__$1);if(temp__4126__auto__)
{var s__53998__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53998__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53998__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54000 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53999 = (0);while(true){
if((i__53999 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__53999);cljs.core.chunk_append.call(null,b__54000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__54001 = (i__53999 + (1));
i__53999 = G__54001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54000),iter__53997.call(null,cljs.core.chunk_rest.call(null,s__53998__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54000),null);
}
} else
{var x = cljs.core.first.call(null,s__53998__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__53997.call(null,cljs.core.rest.call(null,s__53998__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list53992);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list54002 = (function ordered_list54002(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__54007(s__54008){return (new cljs.core.LazySeq(null,(function (){var s__54008__$1 = s__54008;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__54008__$1);if(temp__4126__auto__)
{var s__54008__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__54008__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__54008__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54010 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__54009 = (0);while(true){
if((i__54009 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__54009);cljs.core.chunk_append.call(null,b__54010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__54011 = (i__54009 + (1));
i__54009 = G__54011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54010),iter__54007.call(null,cljs.core.chunk_rest.call(null,s__54008__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54010),null);
}
} else
{var x = cljs.core.first.call(null,s__54008__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__54007.call(null,cljs.core.rest.call(null,s__54008__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list54002);
/**
* Create an image element.
*/
sablono.core.image54012 = (function() {
var image54012 = null;
var image54012__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image54012__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image54012 = function(src,alt){
switch(arguments.length){
case 1:
return image54012__1.call(this,src);
case 2:
return image54012__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image54012.cljs$core$IFn$_invoke$arity$1 = image54012__1;
image54012.cljs$core$IFn$_invoke$arity$2 = image54012__2;
return image54012;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image54012);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__54013_SHARP_,p2__54014_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54013_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54014_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__54015_SHARP_,p2__54016_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54015_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54016_SHARP_));
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
sablono.core.color_field54017 = (function() {
var color_field54017 = null;
var color_field54017__1 = (function (name__10211__auto__){return color_field54017.call(null,name__10211__auto__,null);
});
var color_field54017__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field54017 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field54017__1.call(this,name__10211__auto__);
case 2:
return color_field54017__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field54017.cljs$core$IFn$_invoke$arity$1 = color_field54017__1;
color_field54017.cljs$core$IFn$_invoke$arity$2 = color_field54017__2;
return color_field54017;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field54017);
/**
* Creates a date input field.
*/
sablono.core.date_field54018 = (function() {
var date_field54018 = null;
var date_field54018__1 = (function (name__10211__auto__){return date_field54018.call(null,name__10211__auto__,null);
});
var date_field54018__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field54018 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field54018__1.call(this,name__10211__auto__);
case 2:
return date_field54018__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field54018.cljs$core$IFn$_invoke$arity$1 = date_field54018__1;
date_field54018.cljs$core$IFn$_invoke$arity$2 = date_field54018__2;
return date_field54018;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field54018);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field54019 = (function() {
var datetime_field54019 = null;
var datetime_field54019__1 = (function (name__10211__auto__){return datetime_field54019.call(null,name__10211__auto__,null);
});
var datetime_field54019__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field54019 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field54019__1.call(this,name__10211__auto__);
case 2:
return datetime_field54019__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field54019.cljs$core$IFn$_invoke$arity$1 = datetime_field54019__1;
datetime_field54019.cljs$core$IFn$_invoke$arity$2 = datetime_field54019__2;
return datetime_field54019;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field54019);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field54020 = (function() {
var datetime_local_field54020 = null;
var datetime_local_field54020__1 = (function (name__10211__auto__){return datetime_local_field54020.call(null,name__10211__auto__,null);
});
var datetime_local_field54020__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field54020 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field54020__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field54020__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field54020.cljs$core$IFn$_invoke$arity$1 = datetime_local_field54020__1;
datetime_local_field54020.cljs$core$IFn$_invoke$arity$2 = datetime_local_field54020__2;
return datetime_local_field54020;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field54020);
/**
* Creates a email input field.
*/
sablono.core.email_field54021 = (function() {
var email_field54021 = null;
var email_field54021__1 = (function (name__10211__auto__){return email_field54021.call(null,name__10211__auto__,null);
});
var email_field54021__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field54021 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field54021__1.call(this,name__10211__auto__);
case 2:
return email_field54021__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field54021.cljs$core$IFn$_invoke$arity$1 = email_field54021__1;
email_field54021.cljs$core$IFn$_invoke$arity$2 = email_field54021__2;
return email_field54021;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field54021);
/**
* Creates a file input field.
*/
sablono.core.file_field54022 = (function() {
var file_field54022 = null;
var file_field54022__1 = (function (name__10211__auto__){return file_field54022.call(null,name__10211__auto__,null);
});
var file_field54022__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field54022 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field54022__1.call(this,name__10211__auto__);
case 2:
return file_field54022__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field54022.cljs$core$IFn$_invoke$arity$1 = file_field54022__1;
file_field54022.cljs$core$IFn$_invoke$arity$2 = file_field54022__2;
return file_field54022;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field54022);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field54023 = (function() {
var hidden_field54023 = null;
var hidden_field54023__1 = (function (name__10211__auto__){return hidden_field54023.call(null,name__10211__auto__,null);
});
var hidden_field54023__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field54023 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field54023__1.call(this,name__10211__auto__);
case 2:
return hidden_field54023__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field54023.cljs$core$IFn$_invoke$arity$1 = hidden_field54023__1;
hidden_field54023.cljs$core$IFn$_invoke$arity$2 = hidden_field54023__2;
return hidden_field54023;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field54023);
/**
* Creates a month input field.
*/
sablono.core.month_field54024 = (function() {
var month_field54024 = null;
var month_field54024__1 = (function (name__10211__auto__){return month_field54024.call(null,name__10211__auto__,null);
});
var month_field54024__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field54024 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field54024__1.call(this,name__10211__auto__);
case 2:
return month_field54024__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field54024.cljs$core$IFn$_invoke$arity$1 = month_field54024__1;
month_field54024.cljs$core$IFn$_invoke$arity$2 = month_field54024__2;
return month_field54024;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field54024);
/**
* Creates a number input field.
*/
sablono.core.number_field54025 = (function() {
var number_field54025 = null;
var number_field54025__1 = (function (name__10211__auto__){return number_field54025.call(null,name__10211__auto__,null);
});
var number_field54025__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field54025 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field54025__1.call(this,name__10211__auto__);
case 2:
return number_field54025__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field54025.cljs$core$IFn$_invoke$arity$1 = number_field54025__1;
number_field54025.cljs$core$IFn$_invoke$arity$2 = number_field54025__2;
return number_field54025;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field54025);
/**
* Creates a password input field.
*/
sablono.core.password_field54026 = (function() {
var password_field54026 = null;
var password_field54026__1 = (function (name__10211__auto__){return password_field54026.call(null,name__10211__auto__,null);
});
var password_field54026__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field54026 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field54026__1.call(this,name__10211__auto__);
case 2:
return password_field54026__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field54026.cljs$core$IFn$_invoke$arity$1 = password_field54026__1;
password_field54026.cljs$core$IFn$_invoke$arity$2 = password_field54026__2;
return password_field54026;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field54026);
/**
* Creates a range input field.
*/
sablono.core.range_field54027 = (function() {
var range_field54027 = null;
var range_field54027__1 = (function (name__10211__auto__){return range_field54027.call(null,name__10211__auto__,null);
});
var range_field54027__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field54027 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field54027__1.call(this,name__10211__auto__);
case 2:
return range_field54027__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field54027.cljs$core$IFn$_invoke$arity$1 = range_field54027__1;
range_field54027.cljs$core$IFn$_invoke$arity$2 = range_field54027__2;
return range_field54027;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field54027);
/**
* Creates a search input field.
*/
sablono.core.search_field54028 = (function() {
var search_field54028 = null;
var search_field54028__1 = (function (name__10211__auto__){return search_field54028.call(null,name__10211__auto__,null);
});
var search_field54028__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field54028 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field54028__1.call(this,name__10211__auto__);
case 2:
return search_field54028__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field54028.cljs$core$IFn$_invoke$arity$1 = search_field54028__1;
search_field54028.cljs$core$IFn$_invoke$arity$2 = search_field54028__2;
return search_field54028;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field54028);
/**
* Creates a tel input field.
*/
sablono.core.tel_field54029 = (function() {
var tel_field54029 = null;
var tel_field54029__1 = (function (name__10211__auto__){return tel_field54029.call(null,name__10211__auto__,null);
});
var tel_field54029__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field54029 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field54029__1.call(this,name__10211__auto__);
case 2:
return tel_field54029__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field54029.cljs$core$IFn$_invoke$arity$1 = tel_field54029__1;
tel_field54029.cljs$core$IFn$_invoke$arity$2 = tel_field54029__2;
return tel_field54029;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field54029);
/**
* Creates a text input field.
*/
sablono.core.text_field54030 = (function() {
var text_field54030 = null;
var text_field54030__1 = (function (name__10211__auto__){return text_field54030.call(null,name__10211__auto__,null);
});
var text_field54030__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field54030 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field54030__1.call(this,name__10211__auto__);
case 2:
return text_field54030__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field54030.cljs$core$IFn$_invoke$arity$1 = text_field54030__1;
text_field54030.cljs$core$IFn$_invoke$arity$2 = text_field54030__2;
return text_field54030;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field54030);
/**
* Creates a time input field.
*/
sablono.core.time_field54031 = (function() {
var time_field54031 = null;
var time_field54031__1 = (function (name__10211__auto__){return time_field54031.call(null,name__10211__auto__,null);
});
var time_field54031__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field54031 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field54031__1.call(this,name__10211__auto__);
case 2:
return time_field54031__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field54031.cljs$core$IFn$_invoke$arity$1 = time_field54031__1;
time_field54031.cljs$core$IFn$_invoke$arity$2 = time_field54031__2;
return time_field54031;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field54031);
/**
* Creates a url input field.
*/
sablono.core.url_field54032 = (function() {
var url_field54032 = null;
var url_field54032__1 = (function (name__10211__auto__){return url_field54032.call(null,name__10211__auto__,null);
});
var url_field54032__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field54032 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field54032__1.call(this,name__10211__auto__);
case 2:
return url_field54032__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field54032.cljs$core$IFn$_invoke$arity$1 = url_field54032__1;
url_field54032.cljs$core$IFn$_invoke$arity$2 = url_field54032__2;
return url_field54032;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field54032);
/**
* Creates a week input field.
*/
sablono.core.week_field54033 = (function() {
var week_field54033 = null;
var week_field54033__1 = (function (name__10211__auto__){return week_field54033.call(null,name__10211__auto__,null);
});
var week_field54033__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field54033 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field54033__1.call(this,name__10211__auto__);
case 2:
return week_field54033__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field54033.cljs$core$IFn$_invoke$arity$1 = week_field54033__1;
week_field54033.cljs$core$IFn$_invoke$arity$2 = week_field54033__2;
return week_field54033;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field54033);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box54034 = (function() {
var check_box54034 = null;
var check_box54034__1 = (function (name){return check_box54034.call(null,name,null);
});
var check_box54034__2 = (function (name,checked_QMARK_){return check_box54034.call(null,name,checked_QMARK_,"true");
});
var check_box54034__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box54034 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box54034__1.call(this,name);
case 2:
return check_box54034__2.call(this,name,checked_QMARK_);
case 3:
return check_box54034__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box54034.cljs$core$IFn$_invoke$arity$1 = check_box54034__1;
check_box54034.cljs$core$IFn$_invoke$arity$2 = check_box54034__2;
check_box54034.cljs$core$IFn$_invoke$arity$3 = check_box54034__3;
return check_box54034;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box54034);
/**
* Creates a radio button.
*/
sablono.core.radio_button54035 = (function() {
var radio_button54035 = null;
var radio_button54035__1 = (function (group){return radio_button54035.call(null,group,null);
});
var radio_button54035__2 = (function (group,checked_QMARK_){return radio_button54035.call(null,group,checked_QMARK_,"true");
});
var radio_button54035__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button54035 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button54035__1.call(this,group);
case 2:
return radio_button54035__2.call(this,group,checked_QMARK_);
case 3:
return radio_button54035__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button54035.cljs$core$IFn$_invoke$arity$1 = radio_button54035__1;
radio_button54035.cljs$core$IFn$_invoke$arity$2 = radio_button54035__2;
radio_button54035.cljs$core$IFn$_invoke$arity$3 = radio_button54035__3;
return radio_button54035;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button54035);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options54036 = (function() {
var select_options54036 = null;
var select_options54036__1 = (function (coll){return select_options54036.call(null,coll,null);
});
var select_options54036__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__54045(s__54046){return (new cljs.core.LazySeq(null,(function (){var s__54046__$1 = s__54046;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__54046__$1);if(temp__4126__auto__)
{var s__54046__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__54046__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__54046__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54048 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__54047 = (0);while(true){
if((i__54047 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__54047);cljs.core.chunk_append.call(null,b__54048,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__54051 = x;var text = cljs.core.nth.call(null,vec__54051,(0),null);var val = cljs.core.nth.call(null,vec__54051,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__54051,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options54036.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__54053 = (i__54047 + (1));
i__54047 = G__54053;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54048),iter__54045.call(null,cljs.core.chunk_rest.call(null,s__54046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54048),null);
}
} else
{var x = cljs.core.first.call(null,s__54046__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__54052 = x;var text = cljs.core.nth.call(null,vec__54052,(0),null);var val = cljs.core.nth.call(null,vec__54052,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__54052,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options54036.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__54045.call(null,cljs.core.rest.call(null,s__54046__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options54036 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options54036__1.call(this,coll);
case 2:
return select_options54036__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options54036.cljs$core$IFn$_invoke$arity$1 = select_options54036__1;
select_options54036.cljs$core$IFn$_invoke$arity$2 = select_options54036__2;
return select_options54036;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options54036);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down54054 = (function() {
var drop_down54054 = null;
var drop_down54054__2 = (function (name,options){return drop_down54054.call(null,name,options,null);
});
var drop_down54054__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down54054 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down54054__2.call(this,name,options);
case 3:
return drop_down54054__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down54054.cljs$core$IFn$_invoke$arity$2 = drop_down54054__2;
drop_down54054.cljs$core$IFn$_invoke$arity$3 = drop_down54054__3;
return drop_down54054;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down54054);
/**
* Creates a text area element.
*/
sablono.core.text_area54055 = (function() {
var text_area54055 = null;
var text_area54055__1 = (function (name){return text_area54055.call(null,name,null);
});
var text_area54055__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area54055 = function(name,value){
switch(arguments.length){
case 1:
return text_area54055__1.call(this,name);
case 2:
return text_area54055__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area54055.cljs$core$IFn$_invoke$arity$1 = text_area54055__1;
text_area54055.cljs$core$IFn$_invoke$arity$2 = text_area54055__2;
return text_area54055;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area54055);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label54056 = (function label54056(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label54056);
/**
* Creates a submit button.
*/
sablono.core.submit_button54057 = (function submit_button54057(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button54057);
/**
* Creates a form reset button.
*/
sablono.core.reset_button54058 = (function reset_button54058(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button54058);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to54059 = (function() { 
var form_to54059__delegate = function (p__54060,body){var vec__54062 = p__54060;var method = cljs.core.nth.call(null,vec__54062,(0),null);var action = cljs.core.nth.call(null,vec__54062,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to54059 = function (p__54060,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to54059__delegate.call(this,p__54060,body);};
form_to54059.cljs$lang$maxFixedArity = 1;
form_to54059.cljs$lang$applyTo = (function (arglist__54063){
var p__54060 = cljs.core.first(arglist__54063);
var body = cljs.core.rest(arglist__54063);
return form_to54059__delegate(p__54060,body);
});
form_to54059.cljs$core$IFn$_invoke$arity$variadic = form_to54059__delegate;
return form_to54059;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to54059);

//# sourceMappingURL=core.js.map