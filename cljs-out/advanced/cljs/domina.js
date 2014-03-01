// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_28247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28249 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$262,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28248,table_section_wrapper_28248,opt_wrapper_28247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28249,table_section_wrapper_28248,cell_wrapper_28249,opt_wrapper_28247,table_section_wrapper_28248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28248]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28254 = cljs.core.seq(tbody);var chunk__28255 = null;var count__28256 = 0;var i__28257 = 0;while(true){
if((i__28257 < count__28256))
{var child = chunk__28255.cljs$core$IIndexed$_nth$arity$2(null,i__28257);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28258 = seq__28254;
var G__28259 = chunk__28255;
var G__28260 = count__28256;
var G__28261 = (i__28257 + 1);
seq__28254 = G__28258;
chunk__28255 = G__28259;
count__28256 = G__28260;
i__28257 = G__28261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__28254);if(temp__4092__auto__)
{var seq__28254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28254__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__28254__$1);{
var G__28262 = cljs.core.chunk_rest(seq__28254__$1);
var G__28263 = c__4148__auto__;
var G__28264 = cljs.core.count(c__4148__auto__);
var G__28265 = 0;
seq__28254 = G__28262;
chunk__28255 = G__28263;
count__28256 = G__28264;
i__28257 = G__28265;
continue;
}
} else
{var child = cljs.core.first(seq__28254__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28266 = cljs.core.next(seq__28254__$1);
var G__28267 = null;
var G__28268 = 0;
var G__28269 = 0;
seq__28254 = G__28266;
chunk__28255 = G__28267;
count__28256 = G__28268;
i__28257 = G__28269;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28271 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28272 = wrapper.lastChild;
var G__28273 = (level - 1);
wrapper = G__28272;
level = G__28273;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj28275 = {};return obj28275;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__28276){
var mesg = cljs.core.seq(arglist__28276);
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
log.cljs$lang$applyTo = (function (arglist__28277){
var mesg = cljs.core.seq(arglist__28277);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28278){
var contents = cljs.core.seq(arglist__28278);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28279_SHARP_){return p1__28279_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__28280_SHARP_,p2__28281_SHARP_){return goog.dom.insertChildAt(p1__28280_SHARP_,p2__28281_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__28280_SHARP_,p2__28281_SHARP_){return goog.dom.insertChildAt(p1__28280_SHARP_,p2__28281_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__28283_SHARP_,p2__28282_SHARP_){return goog.dom.insertSiblingBefore(p2__28282_SHARP_,p1__28283_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__28283_SHARP_,p2__28282_SHARP_){return goog.dom.insertSiblingBefore(p2__28282_SHARP_,p1__28283_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__28285_SHARP_,p2__28284_SHARP_){return goog.dom.insertSiblingAfter(p2__28284_SHARP_,p1__28285_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__28285_SHARP_,p2__28284_SHARP_){return goog.dom.insertSiblingAfter(p2__28284_SHARP_,p1__28285_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__28287_SHARP_,p2__28286_SHARP_){return goog.dom.replaceNode(p2__28286_SHARP_,p1__28287_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__28287_SHARP_,p2__28286_SHARP_){return goog.dom.replaceNode(p2__28286_SHARP_,p1__28287_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28292_28296 = cljs.core.seq(domina.nodes(content));var chunk__28293_28297 = null;var count__28294_28298 = 0;var i__28295_28299 = 0;while(true){
if((i__28295_28299 < count__28294_28298))
{var n_28300 = chunk__28293_28297.cljs$core$IIndexed$_nth$arity$2(null,i__28295_28299);goog.style.setStyle(n_28300,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__28301 = seq__28292_28296;
var G__28302 = chunk__28293_28297;
var G__28303 = count__28294_28298;
var G__28304 = (i__28295_28299 + 1);
seq__28292_28296 = G__28301;
chunk__28293_28297 = G__28302;
count__28294_28298 = G__28303;
i__28295_28299 = G__28304;
continue;
}
} else
{var temp__4092__auto___28305 = cljs.core.seq(seq__28292_28296);if(temp__4092__auto___28305)
{var seq__28292_28306__$1 = temp__4092__auto___28305;if(cljs.core.chunked_seq_QMARK_(seq__28292_28306__$1))
{var c__4148__auto___28307 = cljs.core.chunk_first(seq__28292_28306__$1);{
var G__28308 = cljs.core.chunk_rest(seq__28292_28306__$1);
var G__28309 = c__4148__auto___28307;
var G__28310 = cljs.core.count(c__4148__auto___28307);
var G__28311 = 0;
seq__28292_28296 = G__28308;
chunk__28293_28297 = G__28309;
count__28294_28298 = G__28310;
i__28295_28299 = G__28311;
continue;
}
} else
{var n_28312 = cljs.core.first(seq__28292_28306__$1);goog.style.setStyle(n_28312,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__28313 = cljs.core.next(seq__28292_28306__$1);
var G__28314 = null;
var G__28315 = 0;
var G__28316 = 0;
seq__28292_28296 = G__28313;
chunk__28293_28297 = G__28314;
count__28294_28298 = G__28315;
i__28295_28299 = G__28316;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28317){
var content = cljs.core.first(arglist__28317);
arglist__28317 = cljs.core.next(arglist__28317);
var name = cljs.core.first(arglist__28317);
var value = cljs.core.rest(arglist__28317);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28322_28326 = cljs.core.seq(domina.nodes(content));var chunk__28323_28327 = null;var count__28324_28328 = 0;var i__28325_28329 = 0;while(true){
if((i__28325_28329 < count__28324_28328))
{var n_28330 = chunk__28323_28327.cljs$core$IIndexed$_nth$arity$2(null,i__28325_28329);n_28330.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__28331 = seq__28322_28326;
var G__28332 = chunk__28323_28327;
var G__28333 = count__28324_28328;
var G__28334 = (i__28325_28329 + 1);
seq__28322_28326 = G__28331;
chunk__28323_28327 = G__28332;
count__28324_28328 = G__28333;
i__28325_28329 = G__28334;
continue;
}
} else
{var temp__4092__auto___28335 = cljs.core.seq(seq__28322_28326);if(temp__4092__auto___28335)
{var seq__28322_28336__$1 = temp__4092__auto___28335;if(cljs.core.chunked_seq_QMARK_(seq__28322_28336__$1))
{var c__4148__auto___28337 = cljs.core.chunk_first(seq__28322_28336__$1);{
var G__28338 = cljs.core.chunk_rest(seq__28322_28336__$1);
var G__28339 = c__4148__auto___28337;
var G__28340 = cljs.core.count(c__4148__auto___28337);
var G__28341 = 0;
seq__28322_28326 = G__28338;
chunk__28323_28327 = G__28339;
count__28324_28328 = G__28340;
i__28325_28329 = G__28341;
continue;
}
} else
{var n_28342 = cljs.core.first(seq__28322_28336__$1);n_28342.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__28343 = cljs.core.next(seq__28322_28336__$1);
var G__28344 = null;
var G__28345 = 0;
var G__28346 = 0;
seq__28322_28326 = G__28343;
chunk__28323_28327 = G__28344;
count__28324_28328 = G__28345;
i__28325_28329 = G__28346;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28347){
var content = cljs.core.first(arglist__28347);
arglist__28347 = cljs.core.next(arglist__28347);
var name = cljs.core.first(arglist__28347);
var value = cljs.core.rest(arglist__28347);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28352_28356 = cljs.core.seq(domina.nodes(content));var chunk__28353_28357 = null;var count__28354_28358 = 0;var i__28355_28359 = 0;while(true){
if((i__28355_28359 < count__28354_28358))
{var n_28360 = chunk__28353_28357.cljs$core$IIndexed$_nth$arity$2(null,i__28355_28359);n_28360.removeAttribute(cljs.core.name(name));
{
var G__28361 = seq__28352_28356;
var G__28362 = chunk__28353_28357;
var G__28363 = count__28354_28358;
var G__28364 = (i__28355_28359 + 1);
seq__28352_28356 = G__28361;
chunk__28353_28357 = G__28362;
count__28354_28358 = G__28363;
i__28355_28359 = G__28364;
continue;
}
} else
{var temp__4092__auto___28365 = cljs.core.seq(seq__28352_28356);if(temp__4092__auto___28365)
{var seq__28352_28366__$1 = temp__4092__auto___28365;if(cljs.core.chunked_seq_QMARK_(seq__28352_28366__$1))
{var c__4148__auto___28367 = cljs.core.chunk_first(seq__28352_28366__$1);{
var G__28368 = cljs.core.chunk_rest(seq__28352_28366__$1);
var G__28369 = c__4148__auto___28367;
var G__28370 = cljs.core.count(c__4148__auto___28367);
var G__28371 = 0;
seq__28352_28356 = G__28368;
chunk__28353_28357 = G__28369;
count__28354_28358 = G__28370;
i__28355_28359 = G__28371;
continue;
}
} else
{var n_28372 = cljs.core.first(seq__28352_28366__$1);n_28372.removeAttribute(cljs.core.name(name));
{
var G__28373 = cljs.core.next(seq__28352_28366__$1);
var G__28374 = null;
var G__28375 = 0;
var G__28376 = 0;
seq__28352_28356 = G__28373;
chunk__28353_28357 = G__28374;
count__28354_28358 = G__28375;
i__28355_28359 = G__28376;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__28378 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$261)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28379_SHARP_){var attr = attrs__$1.item(p1__28379_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28386_28392 = cljs.core.seq(styles);var chunk__28387_28393 = null;var count__28388_28394 = 0;var i__28389_28395 = 0;while(true){
if((i__28389_28395 < count__28388_28394))
{var vec__28390_28396 = chunk__28387_28393.cljs$core$IIndexed$_nth$arity$2(null,i__28389_28395);var name_28397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28390_28396,0,null);var value_28398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28390_28396,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_28397,cljs.core.array_seq([value_28398], 0));
{
var G__28399 = seq__28386_28392;
var G__28400 = chunk__28387_28393;
var G__28401 = count__28388_28394;
var G__28402 = (i__28389_28395 + 1);
seq__28386_28392 = G__28399;
chunk__28387_28393 = G__28400;
count__28388_28394 = G__28401;
i__28389_28395 = G__28402;
continue;
}
} else
{var temp__4092__auto___28403 = cljs.core.seq(seq__28386_28392);if(temp__4092__auto___28403)
{var seq__28386_28404__$1 = temp__4092__auto___28403;if(cljs.core.chunked_seq_QMARK_(seq__28386_28404__$1))
{var c__4148__auto___28405 = cljs.core.chunk_first(seq__28386_28404__$1);{
var G__28406 = cljs.core.chunk_rest(seq__28386_28404__$1);
var G__28407 = c__4148__auto___28405;
var G__28408 = cljs.core.count(c__4148__auto___28405);
var G__28409 = 0;
seq__28386_28392 = G__28406;
chunk__28387_28393 = G__28407;
count__28388_28394 = G__28408;
i__28389_28395 = G__28409;
continue;
}
} else
{var vec__28391_28410 = cljs.core.first(seq__28386_28404__$1);var name_28411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391_28410,0,null);var value_28412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391_28410,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_28411,cljs.core.array_seq([value_28412], 0));
{
var G__28413 = cljs.core.next(seq__28386_28404__$1);
var G__28414 = null;
var G__28415 = 0;
var G__28416 = 0;
seq__28386_28392 = G__28413;
chunk__28387_28393 = G__28414;
count__28388_28394 = G__28415;
i__28389_28395 = G__28416;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28423_28429 = cljs.core.seq(attrs);var chunk__28424_28430 = null;var count__28425_28431 = 0;var i__28426_28432 = 0;while(true){
if((i__28426_28432 < count__28425_28431))
{var vec__28427_28433 = chunk__28424_28430.cljs$core$IIndexed$_nth$arity$2(null,i__28426_28432);var name_28434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427_28433,0,null);var value_28435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427_28433,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_28434,cljs.core.array_seq([value_28435], 0));
{
var G__28436 = seq__28423_28429;
var G__28437 = chunk__28424_28430;
var G__28438 = count__28425_28431;
var G__28439 = (i__28426_28432 + 1);
seq__28423_28429 = G__28436;
chunk__28424_28430 = G__28437;
count__28425_28431 = G__28438;
i__28426_28432 = G__28439;
continue;
}
} else
{var temp__4092__auto___28440 = cljs.core.seq(seq__28423_28429);if(temp__4092__auto___28440)
{var seq__28423_28441__$1 = temp__4092__auto___28440;if(cljs.core.chunked_seq_QMARK_(seq__28423_28441__$1))
{var c__4148__auto___28442 = cljs.core.chunk_first(seq__28423_28441__$1);{
var G__28443 = cljs.core.chunk_rest(seq__28423_28441__$1);
var G__28444 = c__4148__auto___28442;
var G__28445 = cljs.core.count(c__4148__auto___28442);
var G__28446 = 0;
seq__28423_28429 = G__28443;
chunk__28424_28430 = G__28444;
count__28425_28431 = G__28445;
i__28426_28432 = G__28446;
continue;
}
} else
{var vec__28428_28447 = cljs.core.first(seq__28423_28441__$1);var name_28448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28428_28447,0,null);var value_28449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28428_28447,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_28448,cljs.core.array_seq([value_28449], 0));
{
var G__28450 = cljs.core.next(seq__28423_28441__$1);
var G__28451 = null;
var G__28452 = 0;
var G__28453 = 0;
seq__28423_28429 = G__28450;
chunk__28424_28430 = G__28451;
count__28425_28431 = G__28452;
i__28426_28432 = G__28453;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28458_28462 = cljs.core.seq(domina.nodes(content));var chunk__28459_28463 = null;var count__28460_28464 = 0;var i__28461_28465 = 0;while(true){
if((i__28461_28465 < count__28460_28464))
{var node_28466 = chunk__28459_28463.cljs$core$IIndexed$_nth$arity$2(null,i__28461_28465);goog.dom.classes.add(node_28466,class$);
{
var G__28467 = seq__28458_28462;
var G__28468 = chunk__28459_28463;
var G__28469 = count__28460_28464;
var G__28470 = (i__28461_28465 + 1);
seq__28458_28462 = G__28467;
chunk__28459_28463 = G__28468;
count__28460_28464 = G__28469;
i__28461_28465 = G__28470;
continue;
}
} else
{var temp__4092__auto___28471 = cljs.core.seq(seq__28458_28462);if(temp__4092__auto___28471)
{var seq__28458_28472__$1 = temp__4092__auto___28471;if(cljs.core.chunked_seq_QMARK_(seq__28458_28472__$1))
{var c__4148__auto___28473 = cljs.core.chunk_first(seq__28458_28472__$1);{
var G__28474 = cljs.core.chunk_rest(seq__28458_28472__$1);
var G__28475 = c__4148__auto___28473;
var G__28476 = cljs.core.count(c__4148__auto___28473);
var G__28477 = 0;
seq__28458_28462 = G__28474;
chunk__28459_28463 = G__28475;
count__28460_28464 = G__28476;
i__28461_28465 = G__28477;
continue;
}
} else
{var node_28478 = cljs.core.first(seq__28458_28472__$1);goog.dom.classes.add(node_28478,class$);
{
var G__28479 = cljs.core.next(seq__28458_28472__$1);
var G__28480 = null;
var G__28481 = 0;
var G__28482 = 0;
seq__28458_28462 = G__28479;
chunk__28459_28463 = G__28480;
count__28460_28464 = G__28481;
i__28461_28465 = G__28482;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28487_28491 = cljs.core.seq(domina.nodes(content));var chunk__28488_28492 = null;var count__28489_28493 = 0;var i__28490_28494 = 0;while(true){
if((i__28490_28494 < count__28489_28493))
{var node_28495 = chunk__28488_28492.cljs$core$IIndexed$_nth$arity$2(null,i__28490_28494);goog.dom.classes.remove(node_28495,class$);
{
var G__28496 = seq__28487_28491;
var G__28497 = chunk__28488_28492;
var G__28498 = count__28489_28493;
var G__28499 = (i__28490_28494 + 1);
seq__28487_28491 = G__28496;
chunk__28488_28492 = G__28497;
count__28489_28493 = G__28498;
i__28490_28494 = G__28499;
continue;
}
} else
{var temp__4092__auto___28500 = cljs.core.seq(seq__28487_28491);if(temp__4092__auto___28500)
{var seq__28487_28501__$1 = temp__4092__auto___28500;if(cljs.core.chunked_seq_QMARK_(seq__28487_28501__$1))
{var c__4148__auto___28502 = cljs.core.chunk_first(seq__28487_28501__$1);{
var G__28503 = cljs.core.chunk_rest(seq__28487_28501__$1);
var G__28504 = c__4148__auto___28502;
var G__28505 = cljs.core.count(c__4148__auto___28502);
var G__28506 = 0;
seq__28487_28491 = G__28503;
chunk__28488_28492 = G__28504;
count__28489_28493 = G__28505;
i__28490_28494 = G__28506;
continue;
}
} else
{var node_28507 = cljs.core.first(seq__28487_28501__$1);goog.dom.classes.remove(node_28507,class$);
{
var G__28508 = cljs.core.next(seq__28487_28501__$1);
var G__28509 = null;
var G__28510 = 0;
var G__28511 = 0;
seq__28487_28491 = G__28508;
chunk__28488_28492 = G__28509;
count__28489_28493 = G__28510;
i__28490_28494 = G__28511;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28516_28520 = cljs.core.seq(domina.nodes(content));var chunk__28517_28521 = null;var count__28518_28522 = 0;var i__28519_28523 = 0;while(true){
if((i__28519_28523 < count__28518_28522))
{var node_28524 = chunk__28517_28521.cljs$core$IIndexed$_nth$arity$2(null,i__28519_28523);goog.dom.classes.toggle(node_28524,class$);
{
var G__28525 = seq__28516_28520;
var G__28526 = chunk__28517_28521;
var G__28527 = count__28518_28522;
var G__28528 = (i__28519_28523 + 1);
seq__28516_28520 = G__28525;
chunk__28517_28521 = G__28526;
count__28518_28522 = G__28527;
i__28519_28523 = G__28528;
continue;
}
} else
{var temp__4092__auto___28529 = cljs.core.seq(seq__28516_28520);if(temp__4092__auto___28529)
{var seq__28516_28530__$1 = temp__4092__auto___28529;if(cljs.core.chunked_seq_QMARK_(seq__28516_28530__$1))
{var c__4148__auto___28531 = cljs.core.chunk_first(seq__28516_28530__$1);{
var G__28532 = cljs.core.chunk_rest(seq__28516_28530__$1);
var G__28533 = c__4148__auto___28531;
var G__28534 = cljs.core.count(c__4148__auto___28531);
var G__28535 = 0;
seq__28516_28520 = G__28532;
chunk__28517_28521 = G__28533;
count__28518_28522 = G__28534;
i__28519_28523 = G__28535;
continue;
}
} else
{var node_28536 = cljs.core.first(seq__28516_28530__$1);goog.dom.classes.toggle(node_28536,class$);
{
var G__28537 = cljs.core.next(seq__28516_28530__$1);
var G__28538 = null;
var G__28539 = 0;
var G__28540 = 0;
seq__28516_28520 = G__28537;
chunk__28517_28521 = G__28538;
count__28518_28522 = G__28539;
i__28519_28523 = G__28540;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28549__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__28545_28550 = cljs.core.seq(domina.nodes(content));var chunk__28546_28551 = null;var count__28547_28552 = 0;var i__28548_28553 = 0;while(true){
if((i__28548_28553 < count__28547_28552))
{var node_28554 = chunk__28546_28551.cljs$core$IIndexed$_nth$arity$2(null,i__28548_28553);goog.dom.classes.set(node_28554,classes_28549__$1);
{
var G__28555 = seq__28545_28550;
var G__28556 = chunk__28546_28551;
var G__28557 = count__28547_28552;
var G__28558 = (i__28548_28553 + 1);
seq__28545_28550 = G__28555;
chunk__28546_28551 = G__28556;
count__28547_28552 = G__28557;
i__28548_28553 = G__28558;
continue;
}
} else
{var temp__4092__auto___28559 = cljs.core.seq(seq__28545_28550);if(temp__4092__auto___28559)
{var seq__28545_28560__$1 = temp__4092__auto___28559;if(cljs.core.chunked_seq_QMARK_(seq__28545_28560__$1))
{var c__4148__auto___28561 = cljs.core.chunk_first(seq__28545_28560__$1);{
var G__28562 = cljs.core.chunk_rest(seq__28545_28560__$1);
var G__28563 = c__4148__auto___28561;
var G__28564 = cljs.core.count(c__4148__auto___28561);
var G__28565 = 0;
seq__28545_28550 = G__28562;
chunk__28546_28551 = G__28563;
count__28547_28552 = G__28564;
i__28548_28553 = G__28565;
continue;
}
} else
{var node_28566 = cljs.core.first(seq__28545_28560__$1);goog.dom.classes.set(node_28566,classes_28549__$1);
{
var G__28567 = cljs.core.next(seq__28545_28560__$1);
var G__28568 = null;
var G__28569 = 0;
var G__28570 = 0;
seq__28545_28550 = G__28567;
chunk__28546_28551 = G__28568;
count__28547_28552 = G__28569;
i__28548_28553 = G__28570;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28575_28579 = cljs.core.seq(domina.nodes(content));var chunk__28576_28580 = null;var count__28577_28581 = 0;var i__28578_28582 = 0;while(true){
if((i__28578_28582 < count__28577_28581))
{var node_28583 = chunk__28576_28580.cljs$core$IIndexed$_nth$arity$2(null,i__28578_28582);goog.dom.setTextContent(node_28583,value);
{
var G__28584 = seq__28575_28579;
var G__28585 = chunk__28576_28580;
var G__28586 = count__28577_28581;
var G__28587 = (i__28578_28582 + 1);
seq__28575_28579 = G__28584;
chunk__28576_28580 = G__28585;
count__28577_28581 = G__28586;
i__28578_28582 = G__28587;
continue;
}
} else
{var temp__4092__auto___28588 = cljs.core.seq(seq__28575_28579);if(temp__4092__auto___28588)
{var seq__28575_28589__$1 = temp__4092__auto___28588;if(cljs.core.chunked_seq_QMARK_(seq__28575_28589__$1))
{var c__4148__auto___28590 = cljs.core.chunk_first(seq__28575_28589__$1);{
var G__28591 = cljs.core.chunk_rest(seq__28575_28589__$1);
var G__28592 = c__4148__auto___28590;
var G__28593 = cljs.core.count(c__4148__auto___28590);
var G__28594 = 0;
seq__28575_28579 = G__28591;
chunk__28576_28580 = G__28592;
count__28577_28581 = G__28593;
i__28578_28582 = G__28594;
continue;
}
} else
{var node_28595 = cljs.core.first(seq__28575_28589__$1);goog.dom.setTextContent(node_28595,value);
{
var G__28596 = cljs.core.next(seq__28575_28589__$1);
var G__28597 = null;
var G__28598 = 0;
var G__28599 = 0;
seq__28575_28579 = G__28596;
chunk__28576_28580 = G__28597;
count__28577_28581 = G__28598;
i__28578_28582 = G__28599;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28604_28608 = cljs.core.seq(domina.nodes(content));var chunk__28605_28609 = null;var count__28606_28610 = 0;var i__28607_28611 = 0;while(true){
if((i__28607_28611 < count__28606_28610))
{var node_28612 = chunk__28605_28609.cljs$core$IIndexed$_nth$arity$2(null,i__28607_28611);goog.dom.forms.setValue(node_28612,value);
{
var G__28613 = seq__28604_28608;
var G__28614 = chunk__28605_28609;
var G__28615 = count__28606_28610;
var G__28616 = (i__28607_28611 + 1);
seq__28604_28608 = G__28613;
chunk__28605_28609 = G__28614;
count__28606_28610 = G__28615;
i__28607_28611 = G__28616;
continue;
}
} else
{var temp__4092__auto___28617 = cljs.core.seq(seq__28604_28608);if(temp__4092__auto___28617)
{var seq__28604_28618__$1 = temp__4092__auto___28617;if(cljs.core.chunked_seq_QMARK_(seq__28604_28618__$1))
{var c__4148__auto___28619 = cljs.core.chunk_first(seq__28604_28618__$1);{
var G__28620 = cljs.core.chunk_rest(seq__28604_28618__$1);
var G__28621 = c__4148__auto___28619;
var G__28622 = cljs.core.count(c__4148__auto___28619);
var G__28623 = 0;
seq__28604_28608 = G__28620;
chunk__28605_28609 = G__28621;
count__28606_28610 = G__28622;
i__28607_28611 = G__28623;
continue;
}
} else
{var node_28624 = cljs.core.first(seq__28604_28618__$1);goog.dom.forms.setValue(node_28624,value);
{
var G__28625 = cljs.core.next(seq__28604_28618__$1);
var G__28626 = null;
var G__28627 = 0;
var G__28628 = 0;
seq__28604_28608 = G__28625;
chunk__28605_28609 = G__28626;
count__28606_28610 = G__28627;
i__28607_28611 = G__28628;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_28639 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28635_28640 = cljs.core.seq(domina.nodes(content));var chunk__28636_28641 = null;var count__28637_28642 = 0;var i__28638_28643 = 0;while(true){
if((i__28638_28643 < count__28637_28642))
{var node_28644 = chunk__28636_28641.cljs$core$IIndexed$_nth$arity$2(null,i__28638_28643);node_28644.innerHTML = value_28639;
{
var G__28645 = seq__28635_28640;
var G__28646 = chunk__28636_28641;
var G__28647 = count__28637_28642;
var G__28648 = (i__28638_28643 + 1);
seq__28635_28640 = G__28645;
chunk__28636_28641 = G__28646;
count__28637_28642 = G__28647;
i__28638_28643 = G__28648;
continue;
}
} else
{var temp__4092__auto___28649 = cljs.core.seq(seq__28635_28640);if(temp__4092__auto___28649)
{var seq__28635_28650__$1 = temp__4092__auto___28649;if(cljs.core.chunked_seq_QMARK_(seq__28635_28650__$1))
{var c__4148__auto___28651 = cljs.core.chunk_first(seq__28635_28650__$1);{
var G__28652 = cljs.core.chunk_rest(seq__28635_28650__$1);
var G__28653 = c__4148__auto___28651;
var G__28654 = cljs.core.count(c__4148__auto___28651);
var G__28655 = 0;
seq__28635_28640 = G__28652;
chunk__28636_28641 = G__28653;
count__28637_28642 = G__28654;
i__28638_28643 = G__28655;
continue;
}
} else
{var node_28656 = cljs.core.first(seq__28635_28650__$1);node_28656.innerHTML = value_28639;
{
var G__28657 = cljs.core.next(seq__28635_28650__$1);
var G__28658 = null;
var G__28659 = 0;
var G__28660 = 0;
seq__28635_28640 = G__28657;
chunk__28636_28641 = G__28658;
count__28637_28642 = G__28659;
i__28638_28643 = G__28660;
continue;
}
}
} else
{}
}
break;
}
}catch (e28634){if((e28634 instanceof Error))
{var e_28661 = e28634;domina.replace_children_BANG_(content,value_28639);
} else
{if(cljs.core.constant$keyword$261)
{throw e28634;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28668_28672 = cljs.core.seq(children);var chunk__28669_28673 = null;var count__28670_28674 = 0;var i__28671_28675 = 0;while(true){
if((i__28671_28675 < count__28670_28674))
{var child_28676 = chunk__28669_28673.cljs$core$IIndexed$_nth$arity$2(null,i__28671_28675);frag.appendChild(child_28676);
{
var G__28677 = seq__28668_28672;
var G__28678 = chunk__28669_28673;
var G__28679 = count__28670_28674;
var G__28680 = (i__28671_28675 + 1);
seq__28668_28672 = G__28677;
chunk__28669_28673 = G__28678;
count__28670_28674 = G__28679;
i__28671_28675 = G__28680;
continue;
}
} else
{var temp__4092__auto___28681 = cljs.core.seq(seq__28668_28672);if(temp__4092__auto___28681)
{var seq__28668_28682__$1 = temp__4092__auto___28681;if(cljs.core.chunked_seq_QMARK_(seq__28668_28682__$1))
{var c__4148__auto___28683 = cljs.core.chunk_first(seq__28668_28682__$1);{
var G__28684 = cljs.core.chunk_rest(seq__28668_28682__$1);
var G__28685 = c__4148__auto___28683;
var G__28686 = cljs.core.count(c__4148__auto___28683);
var G__28687 = 0;
seq__28668_28672 = G__28684;
chunk__28669_28673 = G__28685;
count__28670_28674 = G__28686;
i__28671_28675 = G__28687;
continue;
}
} else
{var child_28688 = cljs.core.first(seq__28668_28682__$1);frag.appendChild(child_28688);
{
var G__28689 = cljs.core.next(seq__28668_28682__$1);
var G__28690 = null;
var G__28691 = 0;
var G__28692 = 0;
seq__28668_28672 = G__28689;
chunk__28669_28673 = G__28690;
count__28670_28674 = G__28691;
i__28671_28675 = G__28692;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28662_SHARP_,p2__28663_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28662_SHARP_,p2__28663_SHARP_) : f.call(null,p1__28662_SHARP_,p2__28663_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__28694 = list_thing;if(G__28694)
{var bit__4050__auto__ = (G__28694.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28694.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28694);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$262)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28695 = content;if(G__28695)
{var bit__4050__auto__ = (G__28695.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28695.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28695.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28695);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28695);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$262)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__28696 = content;if(G__28696)
{var bit__4050__auto__ = (G__28696.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28696.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28696.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28696);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$262)
{return content;
} else
{return null;
}
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
