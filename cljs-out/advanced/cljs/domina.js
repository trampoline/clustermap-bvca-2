// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_54206 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_54207 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_54208 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$1085,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_54208,opt_wrapper_54206,table_section_wrapper_54207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_54206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_54207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_54207,cell_wrapper_54208,table_section_wrapper_54207,table_section_wrapper_54207]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__54213 = cljs.core.seq(tbody);var chunk__54214 = null;var count__54215 = (0);var i__54216 = (0);while(true){
if((i__54216 < count__54215))
{var child = chunk__54214.cljs$core$IIndexed$_nth$arity$2(null,i__54216);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54217 = seq__54213;
var G__54218 = chunk__54214;
var G__54219 = count__54215;
var G__54220 = (i__54216 + (1));
seq__54213 = G__54217;
chunk__54214 = G__54218;
count__54215 = G__54219;
i__54216 = G__54220;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54213);if(temp__4126__auto__)
{var seq__54213__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54213__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__54213__$1);{
var G__54221 = cljs.core.chunk_rest(seq__54213__$1);
var G__54222 = c__4314__auto__;
var G__54223 = cljs.core.count(c__4314__auto__);
var G__54224 = (0);
seq__54213 = G__54221;
chunk__54214 = G__54222;
count__54215 = G__54223;
i__54216 = G__54224;
continue;
}
} else
{var child = cljs.core.first(seq__54213__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54225 = cljs.core.next(seq__54213__$1);
var G__54226 = null;
var G__54227 = (0);
var G__54228 = (0);
seq__54213 = G__54225;
chunk__54214 = G__54226;
count__54215 = G__54227;
i__54216 = G__54228;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__54230 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54230,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54230,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54230,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__54231 = wrapper.lastChild;
var G__54232 = (level - (1));
wrapper = G__54231;
level = G__54232;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj54234 = {};return obj54234;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__54235){
var mesg = cljs.core.seq(arglist__54235);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__54236){
var mesg = cljs.core.seq(arglist__54236);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__54237){
var contents = cljs.core.seq(arglist__54237);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54238_SHARP_){return p1__54238_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54239_SHARP_,p2__54240_SHARP_){return goog.dom.insertChildAt(p1__54239_SHARP_,p2__54240_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__54239_SHARP_,p2__54240_SHARP_){return goog.dom.insertChildAt(p1__54239_SHARP_,p2__54240_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54242_SHARP_,p2__54241_SHARP_){return goog.dom.insertSiblingBefore(p2__54241_SHARP_,p1__54242_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54242_SHARP_,p2__54241_SHARP_){return goog.dom.insertSiblingBefore(p2__54241_SHARP_,p1__54242_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54244_SHARP_,p2__54243_SHARP_){return goog.dom.insertSiblingAfter(p2__54243_SHARP_,p1__54244_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54244_SHARP_,p2__54243_SHARP_){return goog.dom.insertSiblingAfter(p2__54243_SHARP_,p1__54244_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54246_SHARP_,p2__54245_SHARP_){return goog.dom.replaceNode(p2__54245_SHARP_,p1__54246_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54246_SHARP_,p2__54245_SHARP_){return goog.dom.replaceNode(p2__54245_SHARP_,p1__54246_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__54251_54255 = cljs.core.seq(domina.nodes(content));var chunk__54252_54256 = null;var count__54253_54257 = (0);var i__54254_54258 = (0);while(true){
if((i__54254_54258 < count__54253_54257))
{var n_54259 = chunk__54252_54256.cljs$core$IIndexed$_nth$arity$2(null,i__54254_54258);goog.style.setStyle(n_54259,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54260 = seq__54251_54255;
var G__54261 = chunk__54252_54256;
var G__54262 = count__54253_54257;
var G__54263 = (i__54254_54258 + (1));
seq__54251_54255 = G__54260;
chunk__54252_54256 = G__54261;
count__54253_54257 = G__54262;
i__54254_54258 = G__54263;
continue;
}
} else
{var temp__4126__auto___54264 = cljs.core.seq(seq__54251_54255);if(temp__4126__auto___54264)
{var seq__54251_54265__$1 = temp__4126__auto___54264;if(cljs.core.chunked_seq_QMARK_(seq__54251_54265__$1))
{var c__4314__auto___54266 = cljs.core.chunk_first(seq__54251_54265__$1);{
var G__54267 = cljs.core.chunk_rest(seq__54251_54265__$1);
var G__54268 = c__4314__auto___54266;
var G__54269 = cljs.core.count(c__4314__auto___54266);
var G__54270 = (0);
seq__54251_54255 = G__54267;
chunk__54252_54256 = G__54268;
count__54253_54257 = G__54269;
i__54254_54258 = G__54270;
continue;
}
} else
{var n_54271 = cljs.core.first(seq__54251_54265__$1);goog.style.setStyle(n_54271,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54272 = cljs.core.next(seq__54251_54265__$1);
var G__54273 = null;
var G__54274 = (0);
var G__54275 = (0);
seq__54251_54255 = G__54272;
chunk__54252_54256 = G__54273;
count__54253_54257 = G__54274;
i__54254_54258 = G__54275;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__54276){
var content = cljs.core.first(arglist__54276);
arglist__54276 = cljs.core.next(arglist__54276);
var name = cljs.core.first(arglist__54276);
var value = cljs.core.rest(arglist__54276);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__54281_54285 = cljs.core.seq(domina.nodes(content));var chunk__54282_54286 = null;var count__54283_54287 = (0);var i__54284_54288 = (0);while(true){
if((i__54284_54288 < count__54283_54287))
{var n_54289 = chunk__54282_54286.cljs$core$IIndexed$_nth$arity$2(null,i__54284_54288);n_54289.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54290 = seq__54281_54285;
var G__54291 = chunk__54282_54286;
var G__54292 = count__54283_54287;
var G__54293 = (i__54284_54288 + (1));
seq__54281_54285 = G__54290;
chunk__54282_54286 = G__54291;
count__54283_54287 = G__54292;
i__54284_54288 = G__54293;
continue;
}
} else
{var temp__4126__auto___54294 = cljs.core.seq(seq__54281_54285);if(temp__4126__auto___54294)
{var seq__54281_54295__$1 = temp__4126__auto___54294;if(cljs.core.chunked_seq_QMARK_(seq__54281_54295__$1))
{var c__4314__auto___54296 = cljs.core.chunk_first(seq__54281_54295__$1);{
var G__54297 = cljs.core.chunk_rest(seq__54281_54295__$1);
var G__54298 = c__4314__auto___54296;
var G__54299 = cljs.core.count(c__4314__auto___54296);
var G__54300 = (0);
seq__54281_54285 = G__54297;
chunk__54282_54286 = G__54298;
count__54283_54287 = G__54299;
i__54284_54288 = G__54300;
continue;
}
} else
{var n_54301 = cljs.core.first(seq__54281_54295__$1);n_54301.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54302 = cljs.core.next(seq__54281_54295__$1);
var G__54303 = null;
var G__54304 = (0);
var G__54305 = (0);
seq__54281_54285 = G__54302;
chunk__54282_54286 = G__54303;
count__54283_54287 = G__54304;
i__54284_54288 = G__54305;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__54306){
var content = cljs.core.first(arglist__54306);
arglist__54306 = cljs.core.next(arglist__54306);
var name = cljs.core.first(arglist__54306);
var value = cljs.core.rest(arglist__54306);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__54311_54315 = cljs.core.seq(domina.nodes(content));var chunk__54312_54316 = null;var count__54313_54317 = (0);var i__54314_54318 = (0);while(true){
if((i__54314_54318 < count__54313_54317))
{var n_54319 = chunk__54312_54316.cljs$core$IIndexed$_nth$arity$2(null,i__54314_54318);n_54319.removeAttribute(cljs.core.name(name));
{
var G__54320 = seq__54311_54315;
var G__54321 = chunk__54312_54316;
var G__54322 = count__54313_54317;
var G__54323 = (i__54314_54318 + (1));
seq__54311_54315 = G__54320;
chunk__54312_54316 = G__54321;
count__54313_54317 = G__54322;
i__54314_54318 = G__54323;
continue;
}
} else
{var temp__4126__auto___54324 = cljs.core.seq(seq__54311_54315);if(temp__4126__auto___54324)
{var seq__54311_54325__$1 = temp__4126__auto___54324;if(cljs.core.chunked_seq_QMARK_(seq__54311_54325__$1))
{var c__4314__auto___54326 = cljs.core.chunk_first(seq__54311_54325__$1);{
var G__54327 = cljs.core.chunk_rest(seq__54311_54325__$1);
var G__54328 = c__4314__auto___54326;
var G__54329 = cljs.core.count(c__4314__auto___54326);
var G__54330 = (0);
seq__54311_54315 = G__54327;
chunk__54312_54316 = G__54328;
count__54313_54317 = G__54329;
i__54314_54318 = G__54330;
continue;
}
} else
{var n_54331 = cljs.core.first(seq__54311_54325__$1);n_54331.removeAttribute(cljs.core.name(name));
{
var G__54332 = cljs.core.next(seq__54311_54325__$1);
var G__54333 = null;
var G__54334 = (0);
var G__54335 = (0);
seq__54311_54315 = G__54332;
chunk__54312_54316 = G__54333;
count__54313_54317 = G__54334;
i__54314_54318 = G__54335;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__54337 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54337,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54337,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__54338_SHARP_){var attr = attrs__$1.item(p1__54338_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__54345_54351 = cljs.core.seq(styles);var chunk__54346_54352 = null;var count__54347_54353 = (0);var i__54348_54354 = (0);while(true){
if((i__54348_54354 < count__54347_54353))
{var vec__54349_54355 = chunk__54346_54352.cljs$core$IIndexed$_nth$arity$2(null,i__54348_54354);var name_54356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54349_54355,(0),null);var value_54357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54349_54355,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54356,cljs.core.array_seq([value_54357], 0));
{
var G__54358 = seq__54345_54351;
var G__54359 = chunk__54346_54352;
var G__54360 = count__54347_54353;
var G__54361 = (i__54348_54354 + (1));
seq__54345_54351 = G__54358;
chunk__54346_54352 = G__54359;
count__54347_54353 = G__54360;
i__54348_54354 = G__54361;
continue;
}
} else
{var temp__4126__auto___54362 = cljs.core.seq(seq__54345_54351);if(temp__4126__auto___54362)
{var seq__54345_54363__$1 = temp__4126__auto___54362;if(cljs.core.chunked_seq_QMARK_(seq__54345_54363__$1))
{var c__4314__auto___54364 = cljs.core.chunk_first(seq__54345_54363__$1);{
var G__54365 = cljs.core.chunk_rest(seq__54345_54363__$1);
var G__54366 = c__4314__auto___54364;
var G__54367 = cljs.core.count(c__4314__auto___54364);
var G__54368 = (0);
seq__54345_54351 = G__54365;
chunk__54346_54352 = G__54366;
count__54347_54353 = G__54367;
i__54348_54354 = G__54368;
continue;
}
} else
{var vec__54350_54369 = cljs.core.first(seq__54345_54363__$1);var name_54370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350_54369,(0),null);var value_54371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350_54369,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54370,cljs.core.array_seq([value_54371], 0));
{
var G__54372 = cljs.core.next(seq__54345_54363__$1);
var G__54373 = null;
var G__54374 = (0);
var G__54375 = (0);
seq__54345_54351 = G__54372;
chunk__54346_54352 = G__54373;
count__54347_54353 = G__54374;
i__54348_54354 = G__54375;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__54382_54388 = cljs.core.seq(attrs);var chunk__54383_54389 = null;var count__54384_54390 = (0);var i__54385_54391 = (0);while(true){
if((i__54385_54391 < count__54384_54390))
{var vec__54386_54392 = chunk__54383_54389.cljs$core$IIndexed$_nth$arity$2(null,i__54385_54391);var name_54393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54386_54392,(0),null);var value_54394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54386_54392,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54393,cljs.core.array_seq([value_54394], 0));
{
var G__54395 = seq__54382_54388;
var G__54396 = chunk__54383_54389;
var G__54397 = count__54384_54390;
var G__54398 = (i__54385_54391 + (1));
seq__54382_54388 = G__54395;
chunk__54383_54389 = G__54396;
count__54384_54390 = G__54397;
i__54385_54391 = G__54398;
continue;
}
} else
{var temp__4126__auto___54399 = cljs.core.seq(seq__54382_54388);if(temp__4126__auto___54399)
{var seq__54382_54400__$1 = temp__4126__auto___54399;if(cljs.core.chunked_seq_QMARK_(seq__54382_54400__$1))
{var c__4314__auto___54401 = cljs.core.chunk_first(seq__54382_54400__$1);{
var G__54402 = cljs.core.chunk_rest(seq__54382_54400__$1);
var G__54403 = c__4314__auto___54401;
var G__54404 = cljs.core.count(c__4314__auto___54401);
var G__54405 = (0);
seq__54382_54388 = G__54402;
chunk__54383_54389 = G__54403;
count__54384_54390 = G__54404;
i__54385_54391 = G__54405;
continue;
}
} else
{var vec__54387_54406 = cljs.core.first(seq__54382_54400__$1);var name_54407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54387_54406,(0),null);var value_54408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54387_54406,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54407,cljs.core.array_seq([value_54408], 0));
{
var G__54409 = cljs.core.next(seq__54382_54400__$1);
var G__54410 = null;
var G__54411 = (0);
var G__54412 = (0);
seq__54382_54388 = G__54409;
chunk__54383_54389 = G__54410;
count__54384_54390 = G__54411;
i__54385_54391 = G__54412;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__54417_54421 = cljs.core.seq(domina.nodes(content));var chunk__54418_54422 = null;var count__54419_54423 = (0);var i__54420_54424 = (0);while(true){
if((i__54420_54424 < count__54419_54423))
{var node_54425 = chunk__54418_54422.cljs$core$IIndexed$_nth$arity$2(null,i__54420_54424);goog.dom.classes.add(node_54425,class$);
{
var G__54426 = seq__54417_54421;
var G__54427 = chunk__54418_54422;
var G__54428 = count__54419_54423;
var G__54429 = (i__54420_54424 + (1));
seq__54417_54421 = G__54426;
chunk__54418_54422 = G__54427;
count__54419_54423 = G__54428;
i__54420_54424 = G__54429;
continue;
}
} else
{var temp__4126__auto___54430 = cljs.core.seq(seq__54417_54421);if(temp__4126__auto___54430)
{var seq__54417_54431__$1 = temp__4126__auto___54430;if(cljs.core.chunked_seq_QMARK_(seq__54417_54431__$1))
{var c__4314__auto___54432 = cljs.core.chunk_first(seq__54417_54431__$1);{
var G__54433 = cljs.core.chunk_rest(seq__54417_54431__$1);
var G__54434 = c__4314__auto___54432;
var G__54435 = cljs.core.count(c__4314__auto___54432);
var G__54436 = (0);
seq__54417_54421 = G__54433;
chunk__54418_54422 = G__54434;
count__54419_54423 = G__54435;
i__54420_54424 = G__54436;
continue;
}
} else
{var node_54437 = cljs.core.first(seq__54417_54431__$1);goog.dom.classes.add(node_54437,class$);
{
var G__54438 = cljs.core.next(seq__54417_54431__$1);
var G__54439 = null;
var G__54440 = (0);
var G__54441 = (0);
seq__54417_54421 = G__54438;
chunk__54418_54422 = G__54439;
count__54419_54423 = G__54440;
i__54420_54424 = G__54441;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__54446_54450 = cljs.core.seq(domina.nodes(content));var chunk__54447_54451 = null;var count__54448_54452 = (0);var i__54449_54453 = (0);while(true){
if((i__54449_54453 < count__54448_54452))
{var node_54454 = chunk__54447_54451.cljs$core$IIndexed$_nth$arity$2(null,i__54449_54453);goog.dom.classes.remove(node_54454,class$);
{
var G__54455 = seq__54446_54450;
var G__54456 = chunk__54447_54451;
var G__54457 = count__54448_54452;
var G__54458 = (i__54449_54453 + (1));
seq__54446_54450 = G__54455;
chunk__54447_54451 = G__54456;
count__54448_54452 = G__54457;
i__54449_54453 = G__54458;
continue;
}
} else
{var temp__4126__auto___54459 = cljs.core.seq(seq__54446_54450);if(temp__4126__auto___54459)
{var seq__54446_54460__$1 = temp__4126__auto___54459;if(cljs.core.chunked_seq_QMARK_(seq__54446_54460__$1))
{var c__4314__auto___54461 = cljs.core.chunk_first(seq__54446_54460__$1);{
var G__54462 = cljs.core.chunk_rest(seq__54446_54460__$1);
var G__54463 = c__4314__auto___54461;
var G__54464 = cljs.core.count(c__4314__auto___54461);
var G__54465 = (0);
seq__54446_54450 = G__54462;
chunk__54447_54451 = G__54463;
count__54448_54452 = G__54464;
i__54449_54453 = G__54465;
continue;
}
} else
{var node_54466 = cljs.core.first(seq__54446_54460__$1);goog.dom.classes.remove(node_54466,class$);
{
var G__54467 = cljs.core.next(seq__54446_54460__$1);
var G__54468 = null;
var G__54469 = (0);
var G__54470 = (0);
seq__54446_54450 = G__54467;
chunk__54447_54451 = G__54468;
count__54448_54452 = G__54469;
i__54449_54453 = G__54470;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__54475_54479 = cljs.core.seq(domina.nodes(content));var chunk__54476_54480 = null;var count__54477_54481 = (0);var i__54478_54482 = (0);while(true){
if((i__54478_54482 < count__54477_54481))
{var node_54483 = chunk__54476_54480.cljs$core$IIndexed$_nth$arity$2(null,i__54478_54482);goog.dom.classes.toggle(node_54483,class$);
{
var G__54484 = seq__54475_54479;
var G__54485 = chunk__54476_54480;
var G__54486 = count__54477_54481;
var G__54487 = (i__54478_54482 + (1));
seq__54475_54479 = G__54484;
chunk__54476_54480 = G__54485;
count__54477_54481 = G__54486;
i__54478_54482 = G__54487;
continue;
}
} else
{var temp__4126__auto___54488 = cljs.core.seq(seq__54475_54479);if(temp__4126__auto___54488)
{var seq__54475_54489__$1 = temp__4126__auto___54488;if(cljs.core.chunked_seq_QMARK_(seq__54475_54489__$1))
{var c__4314__auto___54490 = cljs.core.chunk_first(seq__54475_54489__$1);{
var G__54491 = cljs.core.chunk_rest(seq__54475_54489__$1);
var G__54492 = c__4314__auto___54490;
var G__54493 = cljs.core.count(c__4314__auto___54490);
var G__54494 = (0);
seq__54475_54479 = G__54491;
chunk__54476_54480 = G__54492;
count__54477_54481 = G__54493;
i__54478_54482 = G__54494;
continue;
}
} else
{var node_54495 = cljs.core.first(seq__54475_54489__$1);goog.dom.classes.toggle(node_54495,class$);
{
var G__54496 = cljs.core.next(seq__54475_54489__$1);
var G__54497 = null;
var G__54498 = (0);
var G__54499 = (0);
seq__54475_54479 = G__54496;
chunk__54476_54480 = G__54497;
count__54477_54481 = G__54498;
i__54478_54482 = G__54499;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_54508__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__54504_54509 = cljs.core.seq(domina.nodes(content));var chunk__54505_54510 = null;var count__54506_54511 = (0);var i__54507_54512 = (0);while(true){
if((i__54507_54512 < count__54506_54511))
{var node_54513 = chunk__54505_54510.cljs$core$IIndexed$_nth$arity$2(null,i__54507_54512);goog.dom.classes.set(node_54513,classes_54508__$1);
{
var G__54514 = seq__54504_54509;
var G__54515 = chunk__54505_54510;
var G__54516 = count__54506_54511;
var G__54517 = (i__54507_54512 + (1));
seq__54504_54509 = G__54514;
chunk__54505_54510 = G__54515;
count__54506_54511 = G__54516;
i__54507_54512 = G__54517;
continue;
}
} else
{var temp__4126__auto___54518 = cljs.core.seq(seq__54504_54509);if(temp__4126__auto___54518)
{var seq__54504_54519__$1 = temp__4126__auto___54518;if(cljs.core.chunked_seq_QMARK_(seq__54504_54519__$1))
{var c__4314__auto___54520 = cljs.core.chunk_first(seq__54504_54519__$1);{
var G__54521 = cljs.core.chunk_rest(seq__54504_54519__$1);
var G__54522 = c__4314__auto___54520;
var G__54523 = cljs.core.count(c__4314__auto___54520);
var G__54524 = (0);
seq__54504_54509 = G__54521;
chunk__54505_54510 = G__54522;
count__54506_54511 = G__54523;
i__54507_54512 = G__54524;
continue;
}
} else
{var node_54525 = cljs.core.first(seq__54504_54519__$1);goog.dom.classes.set(node_54525,classes_54508__$1);
{
var G__54526 = cljs.core.next(seq__54504_54519__$1);
var G__54527 = null;
var G__54528 = (0);
var G__54529 = (0);
seq__54504_54509 = G__54526;
chunk__54505_54510 = G__54527;
count__54506_54511 = G__54528;
i__54507_54512 = G__54529;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__54534_54538 = cljs.core.seq(domina.nodes(content));var chunk__54535_54539 = null;var count__54536_54540 = (0);var i__54537_54541 = (0);while(true){
if((i__54537_54541 < count__54536_54540))
{var node_54542 = chunk__54535_54539.cljs$core$IIndexed$_nth$arity$2(null,i__54537_54541);goog.dom.setTextContent(node_54542,value);
{
var G__54543 = seq__54534_54538;
var G__54544 = chunk__54535_54539;
var G__54545 = count__54536_54540;
var G__54546 = (i__54537_54541 + (1));
seq__54534_54538 = G__54543;
chunk__54535_54539 = G__54544;
count__54536_54540 = G__54545;
i__54537_54541 = G__54546;
continue;
}
} else
{var temp__4126__auto___54547 = cljs.core.seq(seq__54534_54538);if(temp__4126__auto___54547)
{var seq__54534_54548__$1 = temp__4126__auto___54547;if(cljs.core.chunked_seq_QMARK_(seq__54534_54548__$1))
{var c__4314__auto___54549 = cljs.core.chunk_first(seq__54534_54548__$1);{
var G__54550 = cljs.core.chunk_rest(seq__54534_54548__$1);
var G__54551 = c__4314__auto___54549;
var G__54552 = cljs.core.count(c__4314__auto___54549);
var G__54553 = (0);
seq__54534_54538 = G__54550;
chunk__54535_54539 = G__54551;
count__54536_54540 = G__54552;
i__54537_54541 = G__54553;
continue;
}
} else
{var node_54554 = cljs.core.first(seq__54534_54548__$1);goog.dom.setTextContent(node_54554,value);
{
var G__54555 = cljs.core.next(seq__54534_54548__$1);
var G__54556 = null;
var G__54557 = (0);
var G__54558 = (0);
seq__54534_54538 = G__54555;
chunk__54535_54539 = G__54556;
count__54536_54540 = G__54557;
i__54537_54541 = G__54558;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__54563_54567 = cljs.core.seq(domina.nodes(content));var chunk__54564_54568 = null;var count__54565_54569 = (0);var i__54566_54570 = (0);while(true){
if((i__54566_54570 < count__54565_54569))
{var node_54571 = chunk__54564_54568.cljs$core$IIndexed$_nth$arity$2(null,i__54566_54570);goog.dom.forms.setValue(node_54571,value);
{
var G__54572 = seq__54563_54567;
var G__54573 = chunk__54564_54568;
var G__54574 = count__54565_54569;
var G__54575 = (i__54566_54570 + (1));
seq__54563_54567 = G__54572;
chunk__54564_54568 = G__54573;
count__54565_54569 = G__54574;
i__54566_54570 = G__54575;
continue;
}
} else
{var temp__4126__auto___54576 = cljs.core.seq(seq__54563_54567);if(temp__4126__auto___54576)
{var seq__54563_54577__$1 = temp__4126__auto___54576;if(cljs.core.chunked_seq_QMARK_(seq__54563_54577__$1))
{var c__4314__auto___54578 = cljs.core.chunk_first(seq__54563_54577__$1);{
var G__54579 = cljs.core.chunk_rest(seq__54563_54577__$1);
var G__54580 = c__4314__auto___54578;
var G__54581 = cljs.core.count(c__4314__auto___54578);
var G__54582 = (0);
seq__54563_54567 = G__54579;
chunk__54564_54568 = G__54580;
count__54565_54569 = G__54581;
i__54566_54570 = G__54582;
continue;
}
} else
{var node_54583 = cljs.core.first(seq__54563_54577__$1);goog.dom.forms.setValue(node_54583,value);
{
var G__54584 = cljs.core.next(seq__54563_54577__$1);
var G__54585 = null;
var G__54586 = (0);
var G__54587 = (0);
seq__54563_54567 = G__54584;
chunk__54564_54568 = G__54585;
count__54565_54569 = G__54586;
i__54566_54570 = G__54587;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_54598 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__54594_54599 = cljs.core.seq(domina.nodes(content));var chunk__54595_54600 = null;var count__54596_54601 = (0);var i__54597_54602 = (0);while(true){
if((i__54597_54602 < count__54596_54601))
{var node_54603 = chunk__54595_54600.cljs$core$IIndexed$_nth$arity$2(null,i__54597_54602);node_54603.innerHTML = value_54598;
{
var G__54604 = seq__54594_54599;
var G__54605 = chunk__54595_54600;
var G__54606 = count__54596_54601;
var G__54607 = (i__54597_54602 + (1));
seq__54594_54599 = G__54604;
chunk__54595_54600 = G__54605;
count__54596_54601 = G__54606;
i__54597_54602 = G__54607;
continue;
}
} else
{var temp__4126__auto___54608 = cljs.core.seq(seq__54594_54599);if(temp__4126__auto___54608)
{var seq__54594_54609__$1 = temp__4126__auto___54608;if(cljs.core.chunked_seq_QMARK_(seq__54594_54609__$1))
{var c__4314__auto___54610 = cljs.core.chunk_first(seq__54594_54609__$1);{
var G__54611 = cljs.core.chunk_rest(seq__54594_54609__$1);
var G__54612 = c__4314__auto___54610;
var G__54613 = cljs.core.count(c__4314__auto___54610);
var G__54614 = (0);
seq__54594_54599 = G__54611;
chunk__54595_54600 = G__54612;
count__54596_54601 = G__54613;
i__54597_54602 = G__54614;
continue;
}
} else
{var node_54615 = cljs.core.first(seq__54594_54609__$1);node_54615.innerHTML = value_54598;
{
var G__54616 = cljs.core.next(seq__54594_54609__$1);
var G__54617 = null;
var G__54618 = (0);
var G__54619 = (0);
seq__54594_54599 = G__54616;
chunk__54595_54600 = G__54617;
count__54596_54601 = G__54618;
i__54597_54602 = G__54619;
continue;
}
}
} else
{}
}
break;
}
}catch (e54593){if((e54593 instanceof Error))
{var e_54620 = e54593;domina.replace_children_BANG_(content,value_54598);
} else
{throw e54593;

}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__54627_54631 = cljs.core.seq(children);var chunk__54628_54632 = null;var count__54629_54633 = (0);var i__54630_54634 = (0);while(true){
if((i__54630_54634 < count__54629_54633))
{var child_54635 = chunk__54628_54632.cljs$core$IIndexed$_nth$arity$2(null,i__54630_54634);frag.appendChild(child_54635);
{
var G__54636 = seq__54627_54631;
var G__54637 = chunk__54628_54632;
var G__54638 = count__54629_54633;
var G__54639 = (i__54630_54634 + (1));
seq__54627_54631 = G__54636;
chunk__54628_54632 = G__54637;
count__54629_54633 = G__54638;
i__54630_54634 = G__54639;
continue;
}
} else
{var temp__4126__auto___54640 = cljs.core.seq(seq__54627_54631);if(temp__4126__auto___54640)
{var seq__54627_54641__$1 = temp__4126__auto___54640;if(cljs.core.chunked_seq_QMARK_(seq__54627_54641__$1))
{var c__4314__auto___54642 = cljs.core.chunk_first(seq__54627_54641__$1);{
var G__54643 = cljs.core.chunk_rest(seq__54627_54641__$1);
var G__54644 = c__4314__auto___54642;
var G__54645 = cljs.core.count(c__4314__auto___54642);
var G__54646 = (0);
seq__54627_54631 = G__54643;
chunk__54628_54632 = G__54644;
count__54629_54633 = G__54645;
i__54630_54634 = G__54646;
continue;
}
} else
{var child_54647 = cljs.core.first(seq__54627_54641__$1);frag.appendChild(child_54647);
{
var G__54648 = cljs.core.next(seq__54627_54641__$1);
var G__54649 = null;
var G__54650 = (0);
var G__54651 = (0);
seq__54627_54631 = G__54648;
chunk__54628_54632 = G__54649;
count__54629_54633 = G__54650;
i__54630_54634 = G__54651;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__54621_SHARP_,p2__54622_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__54621_SHARP_,p2__54622_SHARP_) : f.call(null,p1__54621_SHARP_,p2__54622_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__54653 = list_thing;if(G__54653)
{var bit__4208__auto__ = (G__54653.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54653.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54653.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54653);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54653);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__54654 = content;if(G__54654)
{var bit__4208__auto__ = (G__54654.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54654.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54654);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54654);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__54655 = content;if(G__54655)
{var bit__4208__auto__ = (G__54655.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54655.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54655);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54655);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
