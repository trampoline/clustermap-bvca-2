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
var opt_wrapper_26059 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26060 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$160,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26060,table_section_wrapper_26060,opt_wrapper_26059,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26061,table_section_wrapper_26060,cell_wrapper_26061,opt_wrapper_26059,table_section_wrapper_26060,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26060]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26066 = cljs.core.seq(tbody);var chunk__26067 = null;var count__26068 = 0;var i__26069 = 0;while(true){
if((i__26069 < count__26068))
{var child = chunk__26067.cljs$core$IIndexed$_nth$arity$2(null,i__26069);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26070 = seq__26066;
var G__26071 = chunk__26067;
var G__26072 = count__26068;
var G__26073 = (i__26069 + 1);
seq__26066 = G__26070;
chunk__26067 = G__26071;
count__26068 = G__26072;
i__26069 = G__26073;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26066);if(temp__4092__auto__)
{var seq__26066__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26066__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26066__$1);{
var G__26074 = cljs.core.chunk_rest(seq__26066__$1);
var G__26075 = c__4148__auto__;
var G__26076 = cljs.core.count(c__4148__auto__);
var G__26077 = 0;
seq__26066 = G__26074;
chunk__26067 = G__26075;
count__26068 = G__26076;
i__26069 = G__26077;
continue;
}
} else
{var child = cljs.core.first(seq__26066__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26078 = cljs.core.next(seq__26066__$1);
var G__26079 = null;
var G__26080 = 0;
var G__26081 = 0;
seq__26066 = G__26078;
chunk__26067 = G__26079;
count__26068 = G__26080;
i__26069 = G__26081;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26083 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26083,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26083,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26083,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26084 = wrapper.lastChild;
var G__26085 = (level - 1);
wrapper = G__26084;
level = G__26085;
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
domina.DomContent = (function (){var obj26087 = {};return obj26087;
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
log_debug.cljs$lang$applyTo = (function (arglist__26088){
var mesg = cljs.core.seq(arglist__26088);
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
log.cljs$lang$applyTo = (function (arglist__26089){
var mesg = cljs.core.seq(arglist__26089);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26090){
var contents = cljs.core.seq(arglist__26090);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26091_SHARP_){return p1__26091_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26092_SHARP_,p2__26093_SHARP_){return goog.dom.insertChildAt(p1__26092_SHARP_,p2__26093_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26092_SHARP_,p2__26093_SHARP_){return goog.dom.insertChildAt(p1__26092_SHARP_,p2__26093_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26095_SHARP_,p2__26094_SHARP_){return goog.dom.insertSiblingBefore(p2__26094_SHARP_,p1__26095_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26095_SHARP_,p2__26094_SHARP_){return goog.dom.insertSiblingBefore(p2__26094_SHARP_,p1__26095_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26097_SHARP_,p2__26096_SHARP_){return goog.dom.insertSiblingAfter(p2__26096_SHARP_,p1__26097_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26097_SHARP_,p2__26096_SHARP_){return goog.dom.insertSiblingAfter(p2__26096_SHARP_,p1__26097_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26099_SHARP_,p2__26098_SHARP_){return goog.dom.replaceNode(p2__26098_SHARP_,p1__26099_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26099_SHARP_,p2__26098_SHARP_){return goog.dom.replaceNode(p2__26098_SHARP_,p1__26099_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26104_26108 = cljs.core.seq(domina.nodes(content));var chunk__26105_26109 = null;var count__26106_26110 = 0;var i__26107_26111 = 0;while(true){
if((i__26107_26111 < count__26106_26110))
{var n_26112 = chunk__26105_26109.cljs$core$IIndexed$_nth$arity$2(null,i__26107_26111);goog.style.setStyle(n_26112,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26113 = seq__26104_26108;
var G__26114 = chunk__26105_26109;
var G__26115 = count__26106_26110;
var G__26116 = (i__26107_26111 + 1);
seq__26104_26108 = G__26113;
chunk__26105_26109 = G__26114;
count__26106_26110 = G__26115;
i__26107_26111 = G__26116;
continue;
}
} else
{var temp__4092__auto___26117 = cljs.core.seq(seq__26104_26108);if(temp__4092__auto___26117)
{var seq__26104_26118__$1 = temp__4092__auto___26117;if(cljs.core.chunked_seq_QMARK_(seq__26104_26118__$1))
{var c__4148__auto___26119 = cljs.core.chunk_first(seq__26104_26118__$1);{
var G__26120 = cljs.core.chunk_rest(seq__26104_26118__$1);
var G__26121 = c__4148__auto___26119;
var G__26122 = cljs.core.count(c__4148__auto___26119);
var G__26123 = 0;
seq__26104_26108 = G__26120;
chunk__26105_26109 = G__26121;
count__26106_26110 = G__26122;
i__26107_26111 = G__26123;
continue;
}
} else
{var n_26124 = cljs.core.first(seq__26104_26118__$1);goog.style.setStyle(n_26124,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26125 = cljs.core.next(seq__26104_26118__$1);
var G__26126 = null;
var G__26127 = 0;
var G__26128 = 0;
seq__26104_26108 = G__26125;
chunk__26105_26109 = G__26126;
count__26106_26110 = G__26127;
i__26107_26111 = G__26128;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26129){
var content = cljs.core.first(arglist__26129);
arglist__26129 = cljs.core.next(arglist__26129);
var name = cljs.core.first(arglist__26129);
var value = cljs.core.rest(arglist__26129);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26134_26138 = cljs.core.seq(domina.nodes(content));var chunk__26135_26139 = null;var count__26136_26140 = 0;var i__26137_26141 = 0;while(true){
if((i__26137_26141 < count__26136_26140))
{var n_26142 = chunk__26135_26139.cljs$core$IIndexed$_nth$arity$2(null,i__26137_26141);n_26142.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26143 = seq__26134_26138;
var G__26144 = chunk__26135_26139;
var G__26145 = count__26136_26140;
var G__26146 = (i__26137_26141 + 1);
seq__26134_26138 = G__26143;
chunk__26135_26139 = G__26144;
count__26136_26140 = G__26145;
i__26137_26141 = G__26146;
continue;
}
} else
{var temp__4092__auto___26147 = cljs.core.seq(seq__26134_26138);if(temp__4092__auto___26147)
{var seq__26134_26148__$1 = temp__4092__auto___26147;if(cljs.core.chunked_seq_QMARK_(seq__26134_26148__$1))
{var c__4148__auto___26149 = cljs.core.chunk_first(seq__26134_26148__$1);{
var G__26150 = cljs.core.chunk_rest(seq__26134_26148__$1);
var G__26151 = c__4148__auto___26149;
var G__26152 = cljs.core.count(c__4148__auto___26149);
var G__26153 = 0;
seq__26134_26138 = G__26150;
chunk__26135_26139 = G__26151;
count__26136_26140 = G__26152;
i__26137_26141 = G__26153;
continue;
}
} else
{var n_26154 = cljs.core.first(seq__26134_26148__$1);n_26154.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26155 = cljs.core.next(seq__26134_26148__$1);
var G__26156 = null;
var G__26157 = 0;
var G__26158 = 0;
seq__26134_26138 = G__26155;
chunk__26135_26139 = G__26156;
count__26136_26140 = G__26157;
i__26137_26141 = G__26158;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26159){
var content = cljs.core.first(arglist__26159);
arglist__26159 = cljs.core.next(arglist__26159);
var name = cljs.core.first(arglist__26159);
var value = cljs.core.rest(arglist__26159);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26164_26168 = cljs.core.seq(domina.nodes(content));var chunk__26165_26169 = null;var count__26166_26170 = 0;var i__26167_26171 = 0;while(true){
if((i__26167_26171 < count__26166_26170))
{var n_26172 = chunk__26165_26169.cljs$core$IIndexed$_nth$arity$2(null,i__26167_26171);n_26172.removeAttribute(cljs.core.name(name));
{
var G__26173 = seq__26164_26168;
var G__26174 = chunk__26165_26169;
var G__26175 = count__26166_26170;
var G__26176 = (i__26167_26171 + 1);
seq__26164_26168 = G__26173;
chunk__26165_26169 = G__26174;
count__26166_26170 = G__26175;
i__26167_26171 = G__26176;
continue;
}
} else
{var temp__4092__auto___26177 = cljs.core.seq(seq__26164_26168);if(temp__4092__auto___26177)
{var seq__26164_26178__$1 = temp__4092__auto___26177;if(cljs.core.chunked_seq_QMARK_(seq__26164_26178__$1))
{var c__4148__auto___26179 = cljs.core.chunk_first(seq__26164_26178__$1);{
var G__26180 = cljs.core.chunk_rest(seq__26164_26178__$1);
var G__26181 = c__4148__auto___26179;
var G__26182 = cljs.core.count(c__4148__auto___26179);
var G__26183 = 0;
seq__26164_26168 = G__26180;
chunk__26165_26169 = G__26181;
count__26166_26170 = G__26182;
i__26167_26171 = G__26183;
continue;
}
} else
{var n_26184 = cljs.core.first(seq__26164_26178__$1);n_26184.removeAttribute(cljs.core.name(name));
{
var G__26185 = cljs.core.next(seq__26164_26178__$1);
var G__26186 = null;
var G__26187 = 0;
var G__26188 = 0;
seq__26164_26168 = G__26185;
chunk__26165_26169 = G__26186;
count__26166_26170 = G__26187;
i__26167_26171 = G__26188;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26190 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26190,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26190,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$159)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26191_SHARP_){var attr = attrs__$1.item(p1__26191_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26198_26204 = cljs.core.seq(styles);var chunk__26199_26205 = null;var count__26200_26206 = 0;var i__26201_26207 = 0;while(true){
if((i__26201_26207 < count__26200_26206))
{var vec__26202_26208 = chunk__26199_26205.cljs$core$IIndexed$_nth$arity$2(null,i__26201_26207);var name_26209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26202_26208,0,null);var value_26210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26202_26208,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26209,cljs.core.array_seq([value_26210], 0));
{
var G__26211 = seq__26198_26204;
var G__26212 = chunk__26199_26205;
var G__26213 = count__26200_26206;
var G__26214 = (i__26201_26207 + 1);
seq__26198_26204 = G__26211;
chunk__26199_26205 = G__26212;
count__26200_26206 = G__26213;
i__26201_26207 = G__26214;
continue;
}
} else
{var temp__4092__auto___26215 = cljs.core.seq(seq__26198_26204);if(temp__4092__auto___26215)
{var seq__26198_26216__$1 = temp__4092__auto___26215;if(cljs.core.chunked_seq_QMARK_(seq__26198_26216__$1))
{var c__4148__auto___26217 = cljs.core.chunk_first(seq__26198_26216__$1);{
var G__26218 = cljs.core.chunk_rest(seq__26198_26216__$1);
var G__26219 = c__4148__auto___26217;
var G__26220 = cljs.core.count(c__4148__auto___26217);
var G__26221 = 0;
seq__26198_26204 = G__26218;
chunk__26199_26205 = G__26219;
count__26200_26206 = G__26220;
i__26201_26207 = G__26221;
continue;
}
} else
{var vec__26203_26222 = cljs.core.first(seq__26198_26216__$1);var name_26223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26203_26222,0,null);var value_26224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26203_26222,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26223,cljs.core.array_seq([value_26224], 0));
{
var G__26225 = cljs.core.next(seq__26198_26216__$1);
var G__26226 = null;
var G__26227 = 0;
var G__26228 = 0;
seq__26198_26204 = G__26225;
chunk__26199_26205 = G__26226;
count__26200_26206 = G__26227;
i__26201_26207 = G__26228;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26235_26241 = cljs.core.seq(attrs);var chunk__26236_26242 = null;var count__26237_26243 = 0;var i__26238_26244 = 0;while(true){
if((i__26238_26244 < count__26237_26243))
{var vec__26239_26245 = chunk__26236_26242.cljs$core$IIndexed$_nth$arity$2(null,i__26238_26244);var name_26246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239_26245,0,null);var value_26247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239_26245,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26246,cljs.core.array_seq([value_26247], 0));
{
var G__26248 = seq__26235_26241;
var G__26249 = chunk__26236_26242;
var G__26250 = count__26237_26243;
var G__26251 = (i__26238_26244 + 1);
seq__26235_26241 = G__26248;
chunk__26236_26242 = G__26249;
count__26237_26243 = G__26250;
i__26238_26244 = G__26251;
continue;
}
} else
{var temp__4092__auto___26252 = cljs.core.seq(seq__26235_26241);if(temp__4092__auto___26252)
{var seq__26235_26253__$1 = temp__4092__auto___26252;if(cljs.core.chunked_seq_QMARK_(seq__26235_26253__$1))
{var c__4148__auto___26254 = cljs.core.chunk_first(seq__26235_26253__$1);{
var G__26255 = cljs.core.chunk_rest(seq__26235_26253__$1);
var G__26256 = c__4148__auto___26254;
var G__26257 = cljs.core.count(c__4148__auto___26254);
var G__26258 = 0;
seq__26235_26241 = G__26255;
chunk__26236_26242 = G__26256;
count__26237_26243 = G__26257;
i__26238_26244 = G__26258;
continue;
}
} else
{var vec__26240_26259 = cljs.core.first(seq__26235_26253__$1);var name_26260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26240_26259,0,null);var value_26261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26240_26259,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26260,cljs.core.array_seq([value_26261], 0));
{
var G__26262 = cljs.core.next(seq__26235_26253__$1);
var G__26263 = null;
var G__26264 = 0;
var G__26265 = 0;
seq__26235_26241 = G__26262;
chunk__26236_26242 = G__26263;
count__26237_26243 = G__26264;
i__26238_26244 = G__26265;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26270_26274 = cljs.core.seq(domina.nodes(content));var chunk__26271_26275 = null;var count__26272_26276 = 0;var i__26273_26277 = 0;while(true){
if((i__26273_26277 < count__26272_26276))
{var node_26278 = chunk__26271_26275.cljs$core$IIndexed$_nth$arity$2(null,i__26273_26277);goog.dom.classes.add(node_26278,class$);
{
var G__26279 = seq__26270_26274;
var G__26280 = chunk__26271_26275;
var G__26281 = count__26272_26276;
var G__26282 = (i__26273_26277 + 1);
seq__26270_26274 = G__26279;
chunk__26271_26275 = G__26280;
count__26272_26276 = G__26281;
i__26273_26277 = G__26282;
continue;
}
} else
{var temp__4092__auto___26283 = cljs.core.seq(seq__26270_26274);if(temp__4092__auto___26283)
{var seq__26270_26284__$1 = temp__4092__auto___26283;if(cljs.core.chunked_seq_QMARK_(seq__26270_26284__$1))
{var c__4148__auto___26285 = cljs.core.chunk_first(seq__26270_26284__$1);{
var G__26286 = cljs.core.chunk_rest(seq__26270_26284__$1);
var G__26287 = c__4148__auto___26285;
var G__26288 = cljs.core.count(c__4148__auto___26285);
var G__26289 = 0;
seq__26270_26274 = G__26286;
chunk__26271_26275 = G__26287;
count__26272_26276 = G__26288;
i__26273_26277 = G__26289;
continue;
}
} else
{var node_26290 = cljs.core.first(seq__26270_26284__$1);goog.dom.classes.add(node_26290,class$);
{
var G__26291 = cljs.core.next(seq__26270_26284__$1);
var G__26292 = null;
var G__26293 = 0;
var G__26294 = 0;
seq__26270_26274 = G__26291;
chunk__26271_26275 = G__26292;
count__26272_26276 = G__26293;
i__26273_26277 = G__26294;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26299_26303 = cljs.core.seq(domina.nodes(content));var chunk__26300_26304 = null;var count__26301_26305 = 0;var i__26302_26306 = 0;while(true){
if((i__26302_26306 < count__26301_26305))
{var node_26307 = chunk__26300_26304.cljs$core$IIndexed$_nth$arity$2(null,i__26302_26306);goog.dom.classes.remove(node_26307,class$);
{
var G__26308 = seq__26299_26303;
var G__26309 = chunk__26300_26304;
var G__26310 = count__26301_26305;
var G__26311 = (i__26302_26306 + 1);
seq__26299_26303 = G__26308;
chunk__26300_26304 = G__26309;
count__26301_26305 = G__26310;
i__26302_26306 = G__26311;
continue;
}
} else
{var temp__4092__auto___26312 = cljs.core.seq(seq__26299_26303);if(temp__4092__auto___26312)
{var seq__26299_26313__$1 = temp__4092__auto___26312;if(cljs.core.chunked_seq_QMARK_(seq__26299_26313__$1))
{var c__4148__auto___26314 = cljs.core.chunk_first(seq__26299_26313__$1);{
var G__26315 = cljs.core.chunk_rest(seq__26299_26313__$1);
var G__26316 = c__4148__auto___26314;
var G__26317 = cljs.core.count(c__4148__auto___26314);
var G__26318 = 0;
seq__26299_26303 = G__26315;
chunk__26300_26304 = G__26316;
count__26301_26305 = G__26317;
i__26302_26306 = G__26318;
continue;
}
} else
{var node_26319 = cljs.core.first(seq__26299_26313__$1);goog.dom.classes.remove(node_26319,class$);
{
var G__26320 = cljs.core.next(seq__26299_26313__$1);
var G__26321 = null;
var G__26322 = 0;
var G__26323 = 0;
seq__26299_26303 = G__26320;
chunk__26300_26304 = G__26321;
count__26301_26305 = G__26322;
i__26302_26306 = G__26323;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26328_26332 = cljs.core.seq(domina.nodes(content));var chunk__26329_26333 = null;var count__26330_26334 = 0;var i__26331_26335 = 0;while(true){
if((i__26331_26335 < count__26330_26334))
{var node_26336 = chunk__26329_26333.cljs$core$IIndexed$_nth$arity$2(null,i__26331_26335);goog.dom.classes.toggle(node_26336,class$);
{
var G__26337 = seq__26328_26332;
var G__26338 = chunk__26329_26333;
var G__26339 = count__26330_26334;
var G__26340 = (i__26331_26335 + 1);
seq__26328_26332 = G__26337;
chunk__26329_26333 = G__26338;
count__26330_26334 = G__26339;
i__26331_26335 = G__26340;
continue;
}
} else
{var temp__4092__auto___26341 = cljs.core.seq(seq__26328_26332);if(temp__4092__auto___26341)
{var seq__26328_26342__$1 = temp__4092__auto___26341;if(cljs.core.chunked_seq_QMARK_(seq__26328_26342__$1))
{var c__4148__auto___26343 = cljs.core.chunk_first(seq__26328_26342__$1);{
var G__26344 = cljs.core.chunk_rest(seq__26328_26342__$1);
var G__26345 = c__4148__auto___26343;
var G__26346 = cljs.core.count(c__4148__auto___26343);
var G__26347 = 0;
seq__26328_26332 = G__26344;
chunk__26329_26333 = G__26345;
count__26330_26334 = G__26346;
i__26331_26335 = G__26347;
continue;
}
} else
{var node_26348 = cljs.core.first(seq__26328_26342__$1);goog.dom.classes.toggle(node_26348,class$);
{
var G__26349 = cljs.core.next(seq__26328_26342__$1);
var G__26350 = null;
var G__26351 = 0;
var G__26352 = 0;
seq__26328_26332 = G__26349;
chunk__26329_26333 = G__26350;
count__26330_26334 = G__26351;
i__26331_26335 = G__26352;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26361__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26357_26362 = cljs.core.seq(domina.nodes(content));var chunk__26358_26363 = null;var count__26359_26364 = 0;var i__26360_26365 = 0;while(true){
if((i__26360_26365 < count__26359_26364))
{var node_26366 = chunk__26358_26363.cljs$core$IIndexed$_nth$arity$2(null,i__26360_26365);goog.dom.classes.set(node_26366,classes_26361__$1);
{
var G__26367 = seq__26357_26362;
var G__26368 = chunk__26358_26363;
var G__26369 = count__26359_26364;
var G__26370 = (i__26360_26365 + 1);
seq__26357_26362 = G__26367;
chunk__26358_26363 = G__26368;
count__26359_26364 = G__26369;
i__26360_26365 = G__26370;
continue;
}
} else
{var temp__4092__auto___26371 = cljs.core.seq(seq__26357_26362);if(temp__4092__auto___26371)
{var seq__26357_26372__$1 = temp__4092__auto___26371;if(cljs.core.chunked_seq_QMARK_(seq__26357_26372__$1))
{var c__4148__auto___26373 = cljs.core.chunk_first(seq__26357_26372__$1);{
var G__26374 = cljs.core.chunk_rest(seq__26357_26372__$1);
var G__26375 = c__4148__auto___26373;
var G__26376 = cljs.core.count(c__4148__auto___26373);
var G__26377 = 0;
seq__26357_26362 = G__26374;
chunk__26358_26363 = G__26375;
count__26359_26364 = G__26376;
i__26360_26365 = G__26377;
continue;
}
} else
{var node_26378 = cljs.core.first(seq__26357_26372__$1);goog.dom.classes.set(node_26378,classes_26361__$1);
{
var G__26379 = cljs.core.next(seq__26357_26372__$1);
var G__26380 = null;
var G__26381 = 0;
var G__26382 = 0;
seq__26357_26362 = G__26379;
chunk__26358_26363 = G__26380;
count__26359_26364 = G__26381;
i__26360_26365 = G__26382;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26387_26391 = cljs.core.seq(domina.nodes(content));var chunk__26388_26392 = null;var count__26389_26393 = 0;var i__26390_26394 = 0;while(true){
if((i__26390_26394 < count__26389_26393))
{var node_26395 = chunk__26388_26392.cljs$core$IIndexed$_nth$arity$2(null,i__26390_26394);goog.dom.setTextContent(node_26395,value);
{
var G__26396 = seq__26387_26391;
var G__26397 = chunk__26388_26392;
var G__26398 = count__26389_26393;
var G__26399 = (i__26390_26394 + 1);
seq__26387_26391 = G__26396;
chunk__26388_26392 = G__26397;
count__26389_26393 = G__26398;
i__26390_26394 = G__26399;
continue;
}
} else
{var temp__4092__auto___26400 = cljs.core.seq(seq__26387_26391);if(temp__4092__auto___26400)
{var seq__26387_26401__$1 = temp__4092__auto___26400;if(cljs.core.chunked_seq_QMARK_(seq__26387_26401__$1))
{var c__4148__auto___26402 = cljs.core.chunk_first(seq__26387_26401__$1);{
var G__26403 = cljs.core.chunk_rest(seq__26387_26401__$1);
var G__26404 = c__4148__auto___26402;
var G__26405 = cljs.core.count(c__4148__auto___26402);
var G__26406 = 0;
seq__26387_26391 = G__26403;
chunk__26388_26392 = G__26404;
count__26389_26393 = G__26405;
i__26390_26394 = G__26406;
continue;
}
} else
{var node_26407 = cljs.core.first(seq__26387_26401__$1);goog.dom.setTextContent(node_26407,value);
{
var G__26408 = cljs.core.next(seq__26387_26401__$1);
var G__26409 = null;
var G__26410 = 0;
var G__26411 = 0;
seq__26387_26391 = G__26408;
chunk__26388_26392 = G__26409;
count__26389_26393 = G__26410;
i__26390_26394 = G__26411;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26416_26420 = cljs.core.seq(domina.nodes(content));var chunk__26417_26421 = null;var count__26418_26422 = 0;var i__26419_26423 = 0;while(true){
if((i__26419_26423 < count__26418_26422))
{var node_26424 = chunk__26417_26421.cljs$core$IIndexed$_nth$arity$2(null,i__26419_26423);goog.dom.forms.setValue(node_26424,value);
{
var G__26425 = seq__26416_26420;
var G__26426 = chunk__26417_26421;
var G__26427 = count__26418_26422;
var G__26428 = (i__26419_26423 + 1);
seq__26416_26420 = G__26425;
chunk__26417_26421 = G__26426;
count__26418_26422 = G__26427;
i__26419_26423 = G__26428;
continue;
}
} else
{var temp__4092__auto___26429 = cljs.core.seq(seq__26416_26420);if(temp__4092__auto___26429)
{var seq__26416_26430__$1 = temp__4092__auto___26429;if(cljs.core.chunked_seq_QMARK_(seq__26416_26430__$1))
{var c__4148__auto___26431 = cljs.core.chunk_first(seq__26416_26430__$1);{
var G__26432 = cljs.core.chunk_rest(seq__26416_26430__$1);
var G__26433 = c__4148__auto___26431;
var G__26434 = cljs.core.count(c__4148__auto___26431);
var G__26435 = 0;
seq__26416_26420 = G__26432;
chunk__26417_26421 = G__26433;
count__26418_26422 = G__26434;
i__26419_26423 = G__26435;
continue;
}
} else
{var node_26436 = cljs.core.first(seq__26416_26430__$1);goog.dom.forms.setValue(node_26436,value);
{
var G__26437 = cljs.core.next(seq__26416_26430__$1);
var G__26438 = null;
var G__26439 = 0;
var G__26440 = 0;
seq__26416_26420 = G__26437;
chunk__26417_26421 = G__26438;
count__26418_26422 = G__26439;
i__26419_26423 = G__26440;
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
{var value_26451 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26447_26452 = cljs.core.seq(domina.nodes(content));var chunk__26448_26453 = null;var count__26449_26454 = 0;var i__26450_26455 = 0;while(true){
if((i__26450_26455 < count__26449_26454))
{var node_26456 = chunk__26448_26453.cljs$core$IIndexed$_nth$arity$2(null,i__26450_26455);node_26456.innerHTML = value_26451;
{
var G__26457 = seq__26447_26452;
var G__26458 = chunk__26448_26453;
var G__26459 = count__26449_26454;
var G__26460 = (i__26450_26455 + 1);
seq__26447_26452 = G__26457;
chunk__26448_26453 = G__26458;
count__26449_26454 = G__26459;
i__26450_26455 = G__26460;
continue;
}
} else
{var temp__4092__auto___26461 = cljs.core.seq(seq__26447_26452);if(temp__4092__auto___26461)
{var seq__26447_26462__$1 = temp__4092__auto___26461;if(cljs.core.chunked_seq_QMARK_(seq__26447_26462__$1))
{var c__4148__auto___26463 = cljs.core.chunk_first(seq__26447_26462__$1);{
var G__26464 = cljs.core.chunk_rest(seq__26447_26462__$1);
var G__26465 = c__4148__auto___26463;
var G__26466 = cljs.core.count(c__4148__auto___26463);
var G__26467 = 0;
seq__26447_26452 = G__26464;
chunk__26448_26453 = G__26465;
count__26449_26454 = G__26466;
i__26450_26455 = G__26467;
continue;
}
} else
{var node_26468 = cljs.core.first(seq__26447_26462__$1);node_26468.innerHTML = value_26451;
{
var G__26469 = cljs.core.next(seq__26447_26462__$1);
var G__26470 = null;
var G__26471 = 0;
var G__26472 = 0;
seq__26447_26452 = G__26469;
chunk__26448_26453 = G__26470;
count__26449_26454 = G__26471;
i__26450_26455 = G__26472;
continue;
}
}
} else
{}
}
break;
}
}catch (e26446){if((e26446 instanceof Error))
{var e_26473 = e26446;domina.replace_children_BANG_(content,value_26451);
} else
{if(cljs.core.constant$keyword$159)
{throw e26446;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26480_26484 = cljs.core.seq(children);var chunk__26481_26485 = null;var count__26482_26486 = 0;var i__26483_26487 = 0;while(true){
if((i__26483_26487 < count__26482_26486))
{var child_26488 = chunk__26481_26485.cljs$core$IIndexed$_nth$arity$2(null,i__26483_26487);frag.appendChild(child_26488);
{
var G__26489 = seq__26480_26484;
var G__26490 = chunk__26481_26485;
var G__26491 = count__26482_26486;
var G__26492 = (i__26483_26487 + 1);
seq__26480_26484 = G__26489;
chunk__26481_26485 = G__26490;
count__26482_26486 = G__26491;
i__26483_26487 = G__26492;
continue;
}
} else
{var temp__4092__auto___26493 = cljs.core.seq(seq__26480_26484);if(temp__4092__auto___26493)
{var seq__26480_26494__$1 = temp__4092__auto___26493;if(cljs.core.chunked_seq_QMARK_(seq__26480_26494__$1))
{var c__4148__auto___26495 = cljs.core.chunk_first(seq__26480_26494__$1);{
var G__26496 = cljs.core.chunk_rest(seq__26480_26494__$1);
var G__26497 = c__4148__auto___26495;
var G__26498 = cljs.core.count(c__4148__auto___26495);
var G__26499 = 0;
seq__26480_26484 = G__26496;
chunk__26481_26485 = G__26497;
count__26482_26486 = G__26498;
i__26483_26487 = G__26499;
continue;
}
} else
{var child_26500 = cljs.core.first(seq__26480_26494__$1);frag.appendChild(child_26500);
{
var G__26501 = cljs.core.next(seq__26480_26494__$1);
var G__26502 = null;
var G__26503 = 0;
var G__26504 = 0;
seq__26480_26484 = G__26501;
chunk__26481_26485 = G__26502;
count__26482_26486 = G__26503;
i__26483_26487 = G__26504;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26474_SHARP_,p2__26475_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26474_SHARP_,p2__26475_SHARP_) : f.call(null,p1__26474_SHARP_,p2__26475_SHARP_));
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
{if((function (){var G__26506 = list_thing;if(G__26506)
{var bit__4050__auto__ = (G__26506.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26506.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26506);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$160)
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
{if((function (){var G__26507 = content;if(G__26507)
{var bit__4050__auto__ = (G__26507.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26507.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26507);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$160)
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
{if((function (){var G__26508 = content;if(G__26508)
{var bit__4050__auto__ = (G__26508.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26508.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26508);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26508);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$160)
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
