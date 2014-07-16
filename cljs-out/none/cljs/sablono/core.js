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
var G__53784__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__53783 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__53783,(0),null);var body = cljs.core.nthnext.call(null,vec__53783,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__53784 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__53784__delegate.call(this,args);};
G__53784.cljs$lang$maxFixedArity = 0;
G__53784.cljs$lang$applyTo = (function (arglist__53785){
var args = cljs.core.seq(arglist__53785);
return G__53784__delegate(args);
});
G__53784.cljs$core$IFn$_invoke$arity$variadic = G__53784__delegate;
return G__53784;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__53790(s__53791){return (new cljs.core.LazySeq(null,(function (){var s__53791__$1 = s__53791;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53791__$1);if(temp__4126__auto__)
{var s__53791__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53791__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53791__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53793 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53792 = (0);while(true){
if((i__53792 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__53792);cljs.core.chunk_append.call(null,b__53793,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__53794 = (i__53792 + (1));
i__53792 = G__53794;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53793),iter__53790.call(null,cljs.core.chunk_rest.call(null,s__53791__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53793),null);
}
} else
{var args = cljs.core.first.call(null,s__53791__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__53790.call(null,cljs.core.rest.call(null,s__53791__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__53799(s__53800){return (new cljs.core.LazySeq(null,(function (){var s__53800__$1 = s__53800;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53800__$1);if(temp__4126__auto__)
{var s__53800__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53800__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53800__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53802 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53801 = (0);while(true){
if((i__53801 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__53801);cljs.core.chunk_append.call(null,b__53802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__53803 = (i__53801 + (1));
i__53801 = G__53803;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53802),iter__53799.call(null,cljs.core.chunk_rest.call(null,s__53800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53802),null);
}
} else
{var style = cljs.core.first.call(null,s__53800__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__53799.call(null,cljs.core.rest.call(null,s__53800__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__53804){
var styles = cljs.core.seq(arglist__53804);
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
sablono.core.link_to53805 = (function() { 
var link_to53805__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to53805 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to53805__delegate.call(this,url,content);};
link_to53805.cljs$lang$maxFixedArity = 1;
link_to53805.cljs$lang$applyTo = (function (arglist__53806){
var url = cljs.core.first(arglist__53806);
var content = cljs.core.rest(arglist__53806);
return link_to53805__delegate(url,content);
});
link_to53805.cljs$core$IFn$_invoke$arity$variadic = link_to53805__delegate;
return link_to53805;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to53805);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to53807 = (function() { 
var mail_to53807__delegate = function (e_mail,p__53808){var vec__53810 = p__53808;var content = cljs.core.nth.call(null,vec__53810,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to53807 = function (e_mail,var_args){
var p__53808 = null;if (arguments.length > 1) {
  p__53808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to53807__delegate.call(this,e_mail,p__53808);};
mail_to53807.cljs$lang$maxFixedArity = 1;
mail_to53807.cljs$lang$applyTo = (function (arglist__53811){
var e_mail = cljs.core.first(arglist__53811);
var p__53808 = cljs.core.rest(arglist__53811);
return mail_to53807__delegate(e_mail,p__53808);
});
mail_to53807.cljs$core$IFn$_invoke$arity$variadic = mail_to53807__delegate;
return mail_to53807;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to53807);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list53812 = (function unordered_list53812(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__53817(s__53818){return (new cljs.core.LazySeq(null,(function (){var s__53818__$1 = s__53818;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53818__$1);if(temp__4126__auto__)
{var s__53818__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53818__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53818__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53820 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53819 = (0);while(true){
if((i__53819 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__53819);cljs.core.chunk_append.call(null,b__53820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__53821 = (i__53819 + (1));
i__53819 = G__53821;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53820),iter__53817.call(null,cljs.core.chunk_rest.call(null,s__53818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53820),null);
}
} else
{var x = cljs.core.first.call(null,s__53818__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__53817.call(null,cljs.core.rest.call(null,s__53818__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list53812);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list53822 = (function ordered_list53822(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__53827(s__53828){return (new cljs.core.LazySeq(null,(function (){var s__53828__$1 = s__53828;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53828__$1);if(temp__4126__auto__)
{var s__53828__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53828__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53828__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53830 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53829 = (0);while(true){
if((i__53829 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__53829);cljs.core.chunk_append.call(null,b__53830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__53831 = (i__53829 + (1));
i__53829 = G__53831;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53830),iter__53827.call(null,cljs.core.chunk_rest.call(null,s__53828__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53830),null);
}
} else
{var x = cljs.core.first.call(null,s__53828__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__53827.call(null,cljs.core.rest.call(null,s__53828__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list53822);
/**
* Create an image element.
*/
sablono.core.image53832 = (function() {
var image53832 = null;
var image53832__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image53832__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image53832 = function(src,alt){
switch(arguments.length){
case 1:
return image53832__1.call(this,src);
case 2:
return image53832__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image53832.cljs$core$IFn$_invoke$arity$1 = image53832__1;
image53832.cljs$core$IFn$_invoke$arity$2 = image53832__2;
return image53832;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image53832);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__53833_SHARP_,p2__53834_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53833_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53834_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__53835_SHARP_,p2__53836_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53835_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53836_SHARP_));
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
sablono.core.color_field53837 = (function() {
var color_field53837 = null;
var color_field53837__1 = (function (name__10211__auto__){return color_field53837.call(null,name__10211__auto__,null);
});
var color_field53837__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field53837 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field53837__1.call(this,name__10211__auto__);
case 2:
return color_field53837__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field53837.cljs$core$IFn$_invoke$arity$1 = color_field53837__1;
color_field53837.cljs$core$IFn$_invoke$arity$2 = color_field53837__2;
return color_field53837;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field53837);
/**
* Creates a date input field.
*/
sablono.core.date_field53838 = (function() {
var date_field53838 = null;
var date_field53838__1 = (function (name__10211__auto__){return date_field53838.call(null,name__10211__auto__,null);
});
var date_field53838__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field53838 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field53838__1.call(this,name__10211__auto__);
case 2:
return date_field53838__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field53838.cljs$core$IFn$_invoke$arity$1 = date_field53838__1;
date_field53838.cljs$core$IFn$_invoke$arity$2 = date_field53838__2;
return date_field53838;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field53838);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field53839 = (function() {
var datetime_field53839 = null;
var datetime_field53839__1 = (function (name__10211__auto__){return datetime_field53839.call(null,name__10211__auto__,null);
});
var datetime_field53839__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field53839 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field53839__1.call(this,name__10211__auto__);
case 2:
return datetime_field53839__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field53839.cljs$core$IFn$_invoke$arity$1 = datetime_field53839__1;
datetime_field53839.cljs$core$IFn$_invoke$arity$2 = datetime_field53839__2;
return datetime_field53839;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field53839);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field53840 = (function() {
var datetime_local_field53840 = null;
var datetime_local_field53840__1 = (function (name__10211__auto__){return datetime_local_field53840.call(null,name__10211__auto__,null);
});
var datetime_local_field53840__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field53840 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field53840__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field53840__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field53840.cljs$core$IFn$_invoke$arity$1 = datetime_local_field53840__1;
datetime_local_field53840.cljs$core$IFn$_invoke$arity$2 = datetime_local_field53840__2;
return datetime_local_field53840;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field53840);
/**
* Creates a email input field.
*/
sablono.core.email_field53841 = (function() {
var email_field53841 = null;
var email_field53841__1 = (function (name__10211__auto__){return email_field53841.call(null,name__10211__auto__,null);
});
var email_field53841__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field53841 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field53841__1.call(this,name__10211__auto__);
case 2:
return email_field53841__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field53841.cljs$core$IFn$_invoke$arity$1 = email_field53841__1;
email_field53841.cljs$core$IFn$_invoke$arity$2 = email_field53841__2;
return email_field53841;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field53841);
/**
* Creates a file input field.
*/
sablono.core.file_field53842 = (function() {
var file_field53842 = null;
var file_field53842__1 = (function (name__10211__auto__){return file_field53842.call(null,name__10211__auto__,null);
});
var file_field53842__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field53842 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field53842__1.call(this,name__10211__auto__);
case 2:
return file_field53842__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field53842.cljs$core$IFn$_invoke$arity$1 = file_field53842__1;
file_field53842.cljs$core$IFn$_invoke$arity$2 = file_field53842__2;
return file_field53842;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field53842);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field53843 = (function() {
var hidden_field53843 = null;
var hidden_field53843__1 = (function (name__10211__auto__){return hidden_field53843.call(null,name__10211__auto__,null);
});
var hidden_field53843__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field53843 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field53843__1.call(this,name__10211__auto__);
case 2:
return hidden_field53843__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field53843.cljs$core$IFn$_invoke$arity$1 = hidden_field53843__1;
hidden_field53843.cljs$core$IFn$_invoke$arity$2 = hidden_field53843__2;
return hidden_field53843;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field53843);
/**
* Creates a month input field.
*/
sablono.core.month_field53844 = (function() {
var month_field53844 = null;
var month_field53844__1 = (function (name__10211__auto__){return month_field53844.call(null,name__10211__auto__,null);
});
var month_field53844__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field53844 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field53844__1.call(this,name__10211__auto__);
case 2:
return month_field53844__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field53844.cljs$core$IFn$_invoke$arity$1 = month_field53844__1;
month_field53844.cljs$core$IFn$_invoke$arity$2 = month_field53844__2;
return month_field53844;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field53844);
/**
* Creates a number input field.
*/
sablono.core.number_field53845 = (function() {
var number_field53845 = null;
var number_field53845__1 = (function (name__10211__auto__){return number_field53845.call(null,name__10211__auto__,null);
});
var number_field53845__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field53845 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field53845__1.call(this,name__10211__auto__);
case 2:
return number_field53845__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field53845.cljs$core$IFn$_invoke$arity$1 = number_field53845__1;
number_field53845.cljs$core$IFn$_invoke$arity$2 = number_field53845__2;
return number_field53845;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field53845);
/**
* Creates a password input field.
*/
sablono.core.password_field53846 = (function() {
var password_field53846 = null;
var password_field53846__1 = (function (name__10211__auto__){return password_field53846.call(null,name__10211__auto__,null);
});
var password_field53846__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field53846 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field53846__1.call(this,name__10211__auto__);
case 2:
return password_field53846__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field53846.cljs$core$IFn$_invoke$arity$1 = password_field53846__1;
password_field53846.cljs$core$IFn$_invoke$arity$2 = password_field53846__2;
return password_field53846;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field53846);
/**
* Creates a range input field.
*/
sablono.core.range_field53847 = (function() {
var range_field53847 = null;
var range_field53847__1 = (function (name__10211__auto__){return range_field53847.call(null,name__10211__auto__,null);
});
var range_field53847__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field53847 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field53847__1.call(this,name__10211__auto__);
case 2:
return range_field53847__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field53847.cljs$core$IFn$_invoke$arity$1 = range_field53847__1;
range_field53847.cljs$core$IFn$_invoke$arity$2 = range_field53847__2;
return range_field53847;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field53847);
/**
* Creates a search input field.
*/
sablono.core.search_field53848 = (function() {
var search_field53848 = null;
var search_field53848__1 = (function (name__10211__auto__){return search_field53848.call(null,name__10211__auto__,null);
});
var search_field53848__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field53848 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field53848__1.call(this,name__10211__auto__);
case 2:
return search_field53848__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field53848.cljs$core$IFn$_invoke$arity$1 = search_field53848__1;
search_field53848.cljs$core$IFn$_invoke$arity$2 = search_field53848__2;
return search_field53848;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field53848);
/**
* Creates a tel input field.
*/
sablono.core.tel_field53849 = (function() {
var tel_field53849 = null;
var tel_field53849__1 = (function (name__10211__auto__){return tel_field53849.call(null,name__10211__auto__,null);
});
var tel_field53849__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field53849 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field53849__1.call(this,name__10211__auto__);
case 2:
return tel_field53849__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field53849.cljs$core$IFn$_invoke$arity$1 = tel_field53849__1;
tel_field53849.cljs$core$IFn$_invoke$arity$2 = tel_field53849__2;
return tel_field53849;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field53849);
/**
* Creates a text input field.
*/
sablono.core.text_field53850 = (function() {
var text_field53850 = null;
var text_field53850__1 = (function (name__10211__auto__){return text_field53850.call(null,name__10211__auto__,null);
});
var text_field53850__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field53850 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field53850__1.call(this,name__10211__auto__);
case 2:
return text_field53850__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field53850.cljs$core$IFn$_invoke$arity$1 = text_field53850__1;
text_field53850.cljs$core$IFn$_invoke$arity$2 = text_field53850__2;
return text_field53850;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field53850);
/**
* Creates a time input field.
*/
sablono.core.time_field53851 = (function() {
var time_field53851 = null;
var time_field53851__1 = (function (name__10211__auto__){return time_field53851.call(null,name__10211__auto__,null);
});
var time_field53851__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field53851 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field53851__1.call(this,name__10211__auto__);
case 2:
return time_field53851__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field53851.cljs$core$IFn$_invoke$arity$1 = time_field53851__1;
time_field53851.cljs$core$IFn$_invoke$arity$2 = time_field53851__2;
return time_field53851;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field53851);
/**
* Creates a url input field.
*/
sablono.core.url_field53852 = (function() {
var url_field53852 = null;
var url_field53852__1 = (function (name__10211__auto__){return url_field53852.call(null,name__10211__auto__,null);
});
var url_field53852__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field53852 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field53852__1.call(this,name__10211__auto__);
case 2:
return url_field53852__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field53852.cljs$core$IFn$_invoke$arity$1 = url_field53852__1;
url_field53852.cljs$core$IFn$_invoke$arity$2 = url_field53852__2;
return url_field53852;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field53852);
/**
* Creates a week input field.
*/
sablono.core.week_field53853 = (function() {
var week_field53853 = null;
var week_field53853__1 = (function (name__10211__auto__){return week_field53853.call(null,name__10211__auto__,null);
});
var week_field53853__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field53853 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field53853__1.call(this,name__10211__auto__);
case 2:
return week_field53853__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field53853.cljs$core$IFn$_invoke$arity$1 = week_field53853__1;
week_field53853.cljs$core$IFn$_invoke$arity$2 = week_field53853__2;
return week_field53853;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field53853);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box53854 = (function() {
var check_box53854 = null;
var check_box53854__1 = (function (name){return check_box53854.call(null,name,null);
});
var check_box53854__2 = (function (name,checked_QMARK_){return check_box53854.call(null,name,checked_QMARK_,"true");
});
var check_box53854__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box53854 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box53854__1.call(this,name);
case 2:
return check_box53854__2.call(this,name,checked_QMARK_);
case 3:
return check_box53854__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box53854.cljs$core$IFn$_invoke$arity$1 = check_box53854__1;
check_box53854.cljs$core$IFn$_invoke$arity$2 = check_box53854__2;
check_box53854.cljs$core$IFn$_invoke$arity$3 = check_box53854__3;
return check_box53854;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box53854);
/**
* Creates a radio button.
*/
sablono.core.radio_button53855 = (function() {
var radio_button53855 = null;
var radio_button53855__1 = (function (group){return radio_button53855.call(null,group,null);
});
var radio_button53855__2 = (function (group,checked_QMARK_){return radio_button53855.call(null,group,checked_QMARK_,"true");
});
var radio_button53855__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button53855 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button53855__1.call(this,group);
case 2:
return radio_button53855__2.call(this,group,checked_QMARK_);
case 3:
return radio_button53855__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button53855.cljs$core$IFn$_invoke$arity$1 = radio_button53855__1;
radio_button53855.cljs$core$IFn$_invoke$arity$2 = radio_button53855__2;
radio_button53855.cljs$core$IFn$_invoke$arity$3 = radio_button53855__3;
return radio_button53855;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button53855);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options53856 = (function() {
var select_options53856 = null;
var select_options53856__1 = (function (coll){return select_options53856.call(null,coll,null);
});
var select_options53856__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__53865(s__53866){return (new cljs.core.LazySeq(null,(function (){var s__53866__$1 = s__53866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53866__$1);if(temp__4126__auto__)
{var s__53866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53866__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53866__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53868 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53867 = (0);while(true){
if((i__53867 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__53867);cljs.core.chunk_append.call(null,b__53868,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__53871 = x;var text = cljs.core.nth.call(null,vec__53871,(0),null);var val = cljs.core.nth.call(null,vec__53871,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__53871,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options53856.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__53873 = (i__53867 + (1));
i__53867 = G__53873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53868),iter__53865.call(null,cljs.core.chunk_rest.call(null,s__53866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53868),null);
}
} else
{var x = cljs.core.first.call(null,s__53866__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__53872 = x;var text = cljs.core.nth.call(null,vec__53872,(0),null);var val = cljs.core.nth.call(null,vec__53872,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__53872,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options53856.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__53865.call(null,cljs.core.rest.call(null,s__53866__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options53856 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options53856__1.call(this,coll);
case 2:
return select_options53856__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options53856.cljs$core$IFn$_invoke$arity$1 = select_options53856__1;
select_options53856.cljs$core$IFn$_invoke$arity$2 = select_options53856__2;
return select_options53856;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options53856);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down53874 = (function() {
var drop_down53874 = null;
var drop_down53874__2 = (function (name,options){return drop_down53874.call(null,name,options,null);
});
var drop_down53874__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down53874 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down53874__2.call(this,name,options);
case 3:
return drop_down53874__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down53874.cljs$core$IFn$_invoke$arity$2 = drop_down53874__2;
drop_down53874.cljs$core$IFn$_invoke$arity$3 = drop_down53874__3;
return drop_down53874;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down53874);
/**
* Creates a text area element.
*/
sablono.core.text_area53875 = (function() {
var text_area53875 = null;
var text_area53875__1 = (function (name){return text_area53875.call(null,name,null);
});
var text_area53875__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area53875 = function(name,value){
switch(arguments.length){
case 1:
return text_area53875__1.call(this,name);
case 2:
return text_area53875__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area53875.cljs$core$IFn$_invoke$arity$1 = text_area53875__1;
text_area53875.cljs$core$IFn$_invoke$arity$2 = text_area53875__2;
return text_area53875;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area53875);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label53876 = (function label53876(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label53876);
/**
* Creates a submit button.
*/
sablono.core.submit_button53877 = (function submit_button53877(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button53877);
/**
* Creates a form reset button.
*/
sablono.core.reset_button53878 = (function reset_button53878(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button53878);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to53879 = (function() { 
var form_to53879__delegate = function (p__53880,body){var vec__53882 = p__53880;var method = cljs.core.nth.call(null,vec__53882,(0),null);var action = cljs.core.nth.call(null,vec__53882,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to53879 = function (p__53880,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to53879__delegate.call(this,p__53880,body);};
form_to53879.cljs$lang$maxFixedArity = 1;
form_to53879.cljs$lang$applyTo = (function (arglist__53883){
var p__53880 = cljs.core.first(arglist__53883);
var body = cljs.core.rest(arglist__53883);
return form_to53879__delegate(p__53880,body);
});
form_to53879.cljs$core$IFn$_invoke$arity$variadic = form_to53879__delegate;
return form_to53879;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to53879);

//# sourceMappingURL=core.js.map