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
var opt_wrapper_26087 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26088 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$160,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26088,table_section_wrapper_26088,opt_wrapper_26087,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26089,table_section_wrapper_26088,cell_wrapper_26089,opt_wrapper_26087,table_section_wrapper_26088,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26088]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26094 = cljs.core.seq(tbody);var chunk__26095 = null;var count__26096 = 0;var i__26097 = 0;while(true){
if((i__26097 < count__26096))
{var child = chunk__26095.cljs$core$IIndexed$_nth$arity$2(null,i__26097);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26098 = seq__26094;
var G__26099 = chunk__26095;
var G__26100 = count__26096;
var G__26101 = (i__26097 + 1);
seq__26094 = G__26098;
chunk__26095 = G__26099;
count__26096 = G__26100;
i__26097 = G__26101;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26094);if(temp__4092__auto__)
{var seq__26094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26094__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26094__$1);{
var G__26102 = cljs.core.chunk_rest(seq__26094__$1);
var G__26103 = c__4148__auto__;
var G__26104 = cljs.core.count(c__4148__auto__);
var G__26105 = 0;
seq__26094 = G__26102;
chunk__26095 = G__26103;
count__26096 = G__26104;
i__26097 = G__26105;
continue;
}
} else
{var child = cljs.core.first(seq__26094__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26106 = cljs.core.next(seq__26094__$1);
var G__26107 = null;
var G__26108 = 0;
var G__26109 = 0;
seq__26094 = G__26106;
chunk__26095 = G__26107;
count__26096 = G__26108;
i__26097 = G__26109;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26111 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26111,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26111,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26111,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26112 = wrapper.lastChild;
var G__26113 = (level - 1);
wrapper = G__26112;
level = G__26113;
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
domina.DomContent = (function (){var obj26115 = {};return obj26115;
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
log_debug.cljs$lang$applyTo = (function (arglist__26116){
var mesg = cljs.core.seq(arglist__26116);
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
log.cljs$lang$applyTo = (function (arglist__26117){
var mesg = cljs.core.seq(arglist__26117);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26118){
var contents = cljs.core.seq(arglist__26118);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26119_SHARP_){return p1__26119_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26120_SHARP_,p2__26121_SHARP_){return goog.dom.insertChildAt(p1__26120_SHARP_,p2__26121_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26120_SHARP_,p2__26121_SHARP_){return goog.dom.insertChildAt(p1__26120_SHARP_,p2__26121_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26123_SHARP_,p2__26122_SHARP_){return goog.dom.insertSiblingBefore(p2__26122_SHARP_,p1__26123_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26123_SHARP_,p2__26122_SHARP_){return goog.dom.insertSiblingBefore(p2__26122_SHARP_,p1__26123_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26125_SHARP_,p2__26124_SHARP_){return goog.dom.insertSiblingAfter(p2__26124_SHARP_,p1__26125_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26125_SHARP_,p2__26124_SHARP_){return goog.dom.insertSiblingAfter(p2__26124_SHARP_,p1__26125_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26127_SHARP_,p2__26126_SHARP_){return goog.dom.replaceNode(p2__26126_SHARP_,p1__26127_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26127_SHARP_,p2__26126_SHARP_){return goog.dom.replaceNode(p2__26126_SHARP_,p1__26127_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26132_26136 = cljs.core.seq(domina.nodes(content));var chunk__26133_26137 = null;var count__26134_26138 = 0;var i__26135_26139 = 0;while(true){
if((i__26135_26139 < count__26134_26138))
{var n_26140 = chunk__26133_26137.cljs$core$IIndexed$_nth$arity$2(null,i__26135_26139);goog.style.setStyle(n_26140,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26141 = seq__26132_26136;
var G__26142 = chunk__26133_26137;
var G__26143 = count__26134_26138;
var G__26144 = (i__26135_26139 + 1);
seq__26132_26136 = G__26141;
chunk__26133_26137 = G__26142;
count__26134_26138 = G__26143;
i__26135_26139 = G__26144;
continue;
}
} else
{var temp__4092__auto___26145 = cljs.core.seq(seq__26132_26136);if(temp__4092__auto___26145)
{var seq__26132_26146__$1 = temp__4092__auto___26145;if(cljs.core.chunked_seq_QMARK_(seq__26132_26146__$1))
{var c__4148__auto___26147 = cljs.core.chunk_first(seq__26132_26146__$1);{
var G__26148 = cljs.core.chunk_rest(seq__26132_26146__$1);
var G__26149 = c__4148__auto___26147;
var G__26150 = cljs.core.count(c__4148__auto___26147);
var G__26151 = 0;
seq__26132_26136 = G__26148;
chunk__26133_26137 = G__26149;
count__26134_26138 = G__26150;
i__26135_26139 = G__26151;
continue;
}
} else
{var n_26152 = cljs.core.first(seq__26132_26146__$1);goog.style.setStyle(n_26152,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26153 = cljs.core.next(seq__26132_26146__$1);
var G__26154 = null;
var G__26155 = 0;
var G__26156 = 0;
seq__26132_26136 = G__26153;
chunk__26133_26137 = G__26154;
count__26134_26138 = G__26155;
i__26135_26139 = G__26156;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26157){
var content = cljs.core.first(arglist__26157);
arglist__26157 = cljs.core.next(arglist__26157);
var name = cljs.core.first(arglist__26157);
var value = cljs.core.rest(arglist__26157);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26162_26166 = cljs.core.seq(domina.nodes(content));var chunk__26163_26167 = null;var count__26164_26168 = 0;var i__26165_26169 = 0;while(true){
if((i__26165_26169 < count__26164_26168))
{var n_26170 = chunk__26163_26167.cljs$core$IIndexed$_nth$arity$2(null,i__26165_26169);n_26170.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26171 = seq__26162_26166;
var G__26172 = chunk__26163_26167;
var G__26173 = count__26164_26168;
var G__26174 = (i__26165_26169 + 1);
seq__26162_26166 = G__26171;
chunk__26163_26167 = G__26172;
count__26164_26168 = G__26173;
i__26165_26169 = G__26174;
continue;
}
} else
{var temp__4092__auto___26175 = cljs.core.seq(seq__26162_26166);if(temp__4092__auto___26175)
{var seq__26162_26176__$1 = temp__4092__auto___26175;if(cljs.core.chunked_seq_QMARK_(seq__26162_26176__$1))
{var c__4148__auto___26177 = cljs.core.chunk_first(seq__26162_26176__$1);{
var G__26178 = cljs.core.chunk_rest(seq__26162_26176__$1);
var G__26179 = c__4148__auto___26177;
var G__26180 = cljs.core.count(c__4148__auto___26177);
var G__26181 = 0;
seq__26162_26166 = G__26178;
chunk__26163_26167 = G__26179;
count__26164_26168 = G__26180;
i__26165_26169 = G__26181;
continue;
}
} else
{var n_26182 = cljs.core.first(seq__26162_26176__$1);n_26182.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26183 = cljs.core.next(seq__26162_26176__$1);
var G__26184 = null;
var G__26185 = 0;
var G__26186 = 0;
seq__26162_26166 = G__26183;
chunk__26163_26167 = G__26184;
count__26164_26168 = G__26185;
i__26165_26169 = G__26186;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26187){
var content = cljs.core.first(arglist__26187);
arglist__26187 = cljs.core.next(arglist__26187);
var name = cljs.core.first(arglist__26187);
var value = cljs.core.rest(arglist__26187);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26192_26196 = cljs.core.seq(domina.nodes(content));var chunk__26193_26197 = null;var count__26194_26198 = 0;var i__26195_26199 = 0;while(true){
if((i__26195_26199 < count__26194_26198))
{var n_26200 = chunk__26193_26197.cljs$core$IIndexed$_nth$arity$2(null,i__26195_26199);n_26200.removeAttribute(cljs.core.name(name));
{
var G__26201 = seq__26192_26196;
var G__26202 = chunk__26193_26197;
var G__26203 = count__26194_26198;
var G__26204 = (i__26195_26199 + 1);
seq__26192_26196 = G__26201;
chunk__26193_26197 = G__26202;
count__26194_26198 = G__26203;
i__26195_26199 = G__26204;
continue;
}
} else
{var temp__4092__auto___26205 = cljs.core.seq(seq__26192_26196);if(temp__4092__auto___26205)
{var seq__26192_26206__$1 = temp__4092__auto___26205;if(cljs.core.chunked_seq_QMARK_(seq__26192_26206__$1))
{var c__4148__auto___26207 = cljs.core.chunk_first(seq__26192_26206__$1);{
var G__26208 = cljs.core.chunk_rest(seq__26192_26206__$1);
var G__26209 = c__4148__auto___26207;
var G__26210 = cljs.core.count(c__4148__auto___26207);
var G__26211 = 0;
seq__26192_26196 = G__26208;
chunk__26193_26197 = G__26209;
count__26194_26198 = G__26210;
i__26195_26199 = G__26211;
continue;
}
} else
{var n_26212 = cljs.core.first(seq__26192_26206__$1);n_26212.removeAttribute(cljs.core.name(name));
{
var G__26213 = cljs.core.next(seq__26192_26206__$1);
var G__26214 = null;
var G__26215 = 0;
var G__26216 = 0;
seq__26192_26196 = G__26213;
chunk__26193_26197 = G__26214;
count__26194_26198 = G__26215;
i__26195_26199 = G__26216;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26218 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26219_SHARP_){var attr = attrs__$1.item(p1__26219_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26226_26232 = cljs.core.seq(styles);var chunk__26227_26233 = null;var count__26228_26234 = 0;var i__26229_26235 = 0;while(true){
if((i__26229_26235 < count__26228_26234))
{var vec__26230_26236 = chunk__26227_26233.cljs$core$IIndexed$_nth$arity$2(null,i__26229_26235);var name_26237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26230_26236,0,null);var value_26238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26230_26236,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26237,cljs.core.array_seq([value_26238], 0));
{
var G__26239 = seq__26226_26232;
var G__26240 = chunk__26227_26233;
var G__26241 = count__26228_26234;
var G__26242 = (i__26229_26235 + 1);
seq__26226_26232 = G__26239;
chunk__26227_26233 = G__26240;
count__26228_26234 = G__26241;
i__26229_26235 = G__26242;
continue;
}
} else
{var temp__4092__auto___26243 = cljs.core.seq(seq__26226_26232);if(temp__4092__auto___26243)
{var seq__26226_26244__$1 = temp__4092__auto___26243;if(cljs.core.chunked_seq_QMARK_(seq__26226_26244__$1))
{var c__4148__auto___26245 = cljs.core.chunk_first(seq__26226_26244__$1);{
var G__26246 = cljs.core.chunk_rest(seq__26226_26244__$1);
var G__26247 = c__4148__auto___26245;
var G__26248 = cljs.core.count(c__4148__auto___26245);
var G__26249 = 0;
seq__26226_26232 = G__26246;
chunk__26227_26233 = G__26247;
count__26228_26234 = G__26248;
i__26229_26235 = G__26249;
continue;
}
} else
{var vec__26231_26250 = cljs.core.first(seq__26226_26244__$1);var name_26251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231_26250,0,null);var value_26252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231_26250,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26251,cljs.core.array_seq([value_26252], 0));
{
var G__26253 = cljs.core.next(seq__26226_26244__$1);
var G__26254 = null;
var G__26255 = 0;
var G__26256 = 0;
seq__26226_26232 = G__26253;
chunk__26227_26233 = G__26254;
count__26228_26234 = G__26255;
i__26229_26235 = G__26256;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26263_26269 = cljs.core.seq(attrs);var chunk__26264_26270 = null;var count__26265_26271 = 0;var i__26266_26272 = 0;while(true){
if((i__26266_26272 < count__26265_26271))
{var vec__26267_26273 = chunk__26264_26270.cljs$core$IIndexed$_nth$arity$2(null,i__26266_26272);var name_26274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267_26273,0,null);var value_26275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267_26273,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26274,cljs.core.array_seq([value_26275], 0));
{
var G__26276 = seq__26263_26269;
var G__26277 = chunk__26264_26270;
var G__26278 = count__26265_26271;
var G__26279 = (i__26266_26272 + 1);
seq__26263_26269 = G__26276;
chunk__26264_26270 = G__26277;
count__26265_26271 = G__26278;
i__26266_26272 = G__26279;
continue;
}
} else
{var temp__4092__auto___26280 = cljs.core.seq(seq__26263_26269);if(temp__4092__auto___26280)
{var seq__26263_26281__$1 = temp__4092__auto___26280;if(cljs.core.chunked_seq_QMARK_(seq__26263_26281__$1))
{var c__4148__auto___26282 = cljs.core.chunk_first(seq__26263_26281__$1);{
var G__26283 = cljs.core.chunk_rest(seq__26263_26281__$1);
var G__26284 = c__4148__auto___26282;
var G__26285 = cljs.core.count(c__4148__auto___26282);
var G__26286 = 0;
seq__26263_26269 = G__26283;
chunk__26264_26270 = G__26284;
count__26265_26271 = G__26285;
i__26266_26272 = G__26286;
continue;
}
} else
{var vec__26268_26287 = cljs.core.first(seq__26263_26281__$1);var name_26288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268_26287,0,null);var value_26289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268_26287,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26288,cljs.core.array_seq([value_26289], 0));
{
var G__26290 = cljs.core.next(seq__26263_26281__$1);
var G__26291 = null;
var G__26292 = 0;
var G__26293 = 0;
seq__26263_26269 = G__26290;
chunk__26264_26270 = G__26291;
count__26265_26271 = G__26292;
i__26266_26272 = G__26293;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26298_26302 = cljs.core.seq(domina.nodes(content));var chunk__26299_26303 = null;var count__26300_26304 = 0;var i__26301_26305 = 0;while(true){
if((i__26301_26305 < count__26300_26304))
{var node_26306 = chunk__26299_26303.cljs$core$IIndexed$_nth$arity$2(null,i__26301_26305);goog.dom.classes.add(node_26306,class$);
{
var G__26307 = seq__26298_26302;
var G__26308 = chunk__26299_26303;
var G__26309 = count__26300_26304;
var G__26310 = (i__26301_26305 + 1);
seq__26298_26302 = G__26307;
chunk__26299_26303 = G__26308;
count__26300_26304 = G__26309;
i__26301_26305 = G__26310;
continue;
}
} else
{var temp__4092__auto___26311 = cljs.core.seq(seq__26298_26302);if(temp__4092__auto___26311)
{var seq__26298_26312__$1 = temp__4092__auto___26311;if(cljs.core.chunked_seq_QMARK_(seq__26298_26312__$1))
{var c__4148__auto___26313 = cljs.core.chunk_first(seq__26298_26312__$1);{
var G__26314 = cljs.core.chunk_rest(seq__26298_26312__$1);
var G__26315 = c__4148__auto___26313;
var G__26316 = cljs.core.count(c__4148__auto___26313);
var G__26317 = 0;
seq__26298_26302 = G__26314;
chunk__26299_26303 = G__26315;
count__26300_26304 = G__26316;
i__26301_26305 = G__26317;
continue;
}
} else
{var node_26318 = cljs.core.first(seq__26298_26312__$1);goog.dom.classes.add(node_26318,class$);
{
var G__26319 = cljs.core.next(seq__26298_26312__$1);
var G__26320 = null;
var G__26321 = 0;
var G__26322 = 0;
seq__26298_26302 = G__26319;
chunk__26299_26303 = G__26320;
count__26300_26304 = G__26321;
i__26301_26305 = G__26322;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26327_26331 = cljs.core.seq(domina.nodes(content));var chunk__26328_26332 = null;var count__26329_26333 = 0;var i__26330_26334 = 0;while(true){
if((i__26330_26334 < count__26329_26333))
{var node_26335 = chunk__26328_26332.cljs$core$IIndexed$_nth$arity$2(null,i__26330_26334);goog.dom.classes.remove(node_26335,class$);
{
var G__26336 = seq__26327_26331;
var G__26337 = chunk__26328_26332;
var G__26338 = count__26329_26333;
var G__26339 = (i__26330_26334 + 1);
seq__26327_26331 = G__26336;
chunk__26328_26332 = G__26337;
count__26329_26333 = G__26338;
i__26330_26334 = G__26339;
continue;
}
} else
{var temp__4092__auto___26340 = cljs.core.seq(seq__26327_26331);if(temp__4092__auto___26340)
{var seq__26327_26341__$1 = temp__4092__auto___26340;if(cljs.core.chunked_seq_QMARK_(seq__26327_26341__$1))
{var c__4148__auto___26342 = cljs.core.chunk_first(seq__26327_26341__$1);{
var G__26343 = cljs.core.chunk_rest(seq__26327_26341__$1);
var G__26344 = c__4148__auto___26342;
var G__26345 = cljs.core.count(c__4148__auto___26342);
var G__26346 = 0;
seq__26327_26331 = G__26343;
chunk__26328_26332 = G__26344;
count__26329_26333 = G__26345;
i__26330_26334 = G__26346;
continue;
}
} else
{var node_26347 = cljs.core.first(seq__26327_26341__$1);goog.dom.classes.remove(node_26347,class$);
{
var G__26348 = cljs.core.next(seq__26327_26341__$1);
var G__26349 = null;
var G__26350 = 0;
var G__26351 = 0;
seq__26327_26331 = G__26348;
chunk__26328_26332 = G__26349;
count__26329_26333 = G__26350;
i__26330_26334 = G__26351;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26356_26360 = cljs.core.seq(domina.nodes(content));var chunk__26357_26361 = null;var count__26358_26362 = 0;var i__26359_26363 = 0;while(true){
if((i__26359_26363 < count__26358_26362))
{var node_26364 = chunk__26357_26361.cljs$core$IIndexed$_nth$arity$2(null,i__26359_26363);goog.dom.classes.toggle(node_26364,class$);
{
var G__26365 = seq__26356_26360;
var G__26366 = chunk__26357_26361;
var G__26367 = count__26358_26362;
var G__26368 = (i__26359_26363 + 1);
seq__26356_26360 = G__26365;
chunk__26357_26361 = G__26366;
count__26358_26362 = G__26367;
i__26359_26363 = G__26368;
continue;
}
} else
{var temp__4092__auto___26369 = cljs.core.seq(seq__26356_26360);if(temp__4092__auto___26369)
{var seq__26356_26370__$1 = temp__4092__auto___26369;if(cljs.core.chunked_seq_QMARK_(seq__26356_26370__$1))
{var c__4148__auto___26371 = cljs.core.chunk_first(seq__26356_26370__$1);{
var G__26372 = cljs.core.chunk_rest(seq__26356_26370__$1);
var G__26373 = c__4148__auto___26371;
var G__26374 = cljs.core.count(c__4148__auto___26371);
var G__26375 = 0;
seq__26356_26360 = G__26372;
chunk__26357_26361 = G__26373;
count__26358_26362 = G__26374;
i__26359_26363 = G__26375;
continue;
}
} else
{var node_26376 = cljs.core.first(seq__26356_26370__$1);goog.dom.classes.toggle(node_26376,class$);
{
var G__26377 = cljs.core.next(seq__26356_26370__$1);
var G__26378 = null;
var G__26379 = 0;
var G__26380 = 0;
seq__26356_26360 = G__26377;
chunk__26357_26361 = G__26378;
count__26358_26362 = G__26379;
i__26359_26363 = G__26380;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26389__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26385_26390 = cljs.core.seq(domina.nodes(content));var chunk__26386_26391 = null;var count__26387_26392 = 0;var i__26388_26393 = 0;while(true){
if((i__26388_26393 < count__26387_26392))
{var node_26394 = chunk__26386_26391.cljs$core$IIndexed$_nth$arity$2(null,i__26388_26393);goog.dom.classes.set(node_26394,classes_26389__$1);
{
var G__26395 = seq__26385_26390;
var G__26396 = chunk__26386_26391;
var G__26397 = count__26387_26392;
var G__26398 = (i__26388_26393 + 1);
seq__26385_26390 = G__26395;
chunk__26386_26391 = G__26396;
count__26387_26392 = G__26397;
i__26388_26393 = G__26398;
continue;
}
} else
{var temp__4092__auto___26399 = cljs.core.seq(seq__26385_26390);if(temp__4092__auto___26399)
{var seq__26385_26400__$1 = temp__4092__auto___26399;if(cljs.core.chunked_seq_QMARK_(seq__26385_26400__$1))
{var c__4148__auto___26401 = cljs.core.chunk_first(seq__26385_26400__$1);{
var G__26402 = cljs.core.chunk_rest(seq__26385_26400__$1);
var G__26403 = c__4148__auto___26401;
var G__26404 = cljs.core.count(c__4148__auto___26401);
var G__26405 = 0;
seq__26385_26390 = G__26402;
chunk__26386_26391 = G__26403;
count__26387_26392 = G__26404;
i__26388_26393 = G__26405;
continue;
}
} else
{var node_26406 = cljs.core.first(seq__26385_26400__$1);goog.dom.classes.set(node_26406,classes_26389__$1);
{
var G__26407 = cljs.core.next(seq__26385_26400__$1);
var G__26408 = null;
var G__26409 = 0;
var G__26410 = 0;
seq__26385_26390 = G__26407;
chunk__26386_26391 = G__26408;
count__26387_26392 = G__26409;
i__26388_26393 = G__26410;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26415_26419 = cljs.core.seq(domina.nodes(content));var chunk__26416_26420 = null;var count__26417_26421 = 0;var i__26418_26422 = 0;while(true){
if((i__26418_26422 < count__26417_26421))
{var node_26423 = chunk__26416_26420.cljs$core$IIndexed$_nth$arity$2(null,i__26418_26422);goog.dom.setTextContent(node_26423,value);
{
var G__26424 = seq__26415_26419;
var G__26425 = chunk__26416_26420;
var G__26426 = count__26417_26421;
var G__26427 = (i__26418_26422 + 1);
seq__26415_26419 = G__26424;
chunk__26416_26420 = G__26425;
count__26417_26421 = G__26426;
i__26418_26422 = G__26427;
continue;
}
} else
{var temp__4092__auto___26428 = cljs.core.seq(seq__26415_26419);if(temp__4092__auto___26428)
{var seq__26415_26429__$1 = temp__4092__auto___26428;if(cljs.core.chunked_seq_QMARK_(seq__26415_26429__$1))
{var c__4148__auto___26430 = cljs.core.chunk_first(seq__26415_26429__$1);{
var G__26431 = cljs.core.chunk_rest(seq__26415_26429__$1);
var G__26432 = c__4148__auto___26430;
var G__26433 = cljs.core.count(c__4148__auto___26430);
var G__26434 = 0;
seq__26415_26419 = G__26431;
chunk__26416_26420 = G__26432;
count__26417_26421 = G__26433;
i__26418_26422 = G__26434;
continue;
}
} else
{var node_26435 = cljs.core.first(seq__26415_26429__$1);goog.dom.setTextContent(node_26435,value);
{
var G__26436 = cljs.core.next(seq__26415_26429__$1);
var G__26437 = null;
var G__26438 = 0;
var G__26439 = 0;
seq__26415_26419 = G__26436;
chunk__26416_26420 = G__26437;
count__26417_26421 = G__26438;
i__26418_26422 = G__26439;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26444_26448 = cljs.core.seq(domina.nodes(content));var chunk__26445_26449 = null;var count__26446_26450 = 0;var i__26447_26451 = 0;while(true){
if((i__26447_26451 < count__26446_26450))
{var node_26452 = chunk__26445_26449.cljs$core$IIndexed$_nth$arity$2(null,i__26447_26451);goog.dom.forms.setValue(node_26452,value);
{
var G__26453 = seq__26444_26448;
var G__26454 = chunk__26445_26449;
var G__26455 = count__26446_26450;
var G__26456 = (i__26447_26451 + 1);
seq__26444_26448 = G__26453;
chunk__26445_26449 = G__26454;
count__26446_26450 = G__26455;
i__26447_26451 = G__26456;
continue;
}
} else
{var temp__4092__auto___26457 = cljs.core.seq(seq__26444_26448);if(temp__4092__auto___26457)
{var seq__26444_26458__$1 = temp__4092__auto___26457;if(cljs.core.chunked_seq_QMARK_(seq__26444_26458__$1))
{var c__4148__auto___26459 = cljs.core.chunk_first(seq__26444_26458__$1);{
var G__26460 = cljs.core.chunk_rest(seq__26444_26458__$1);
var G__26461 = c__4148__auto___26459;
var G__26462 = cljs.core.count(c__4148__auto___26459);
var G__26463 = 0;
seq__26444_26448 = G__26460;
chunk__26445_26449 = G__26461;
count__26446_26450 = G__26462;
i__26447_26451 = G__26463;
continue;
}
} else
{var node_26464 = cljs.core.first(seq__26444_26458__$1);goog.dom.forms.setValue(node_26464,value);
{
var G__26465 = cljs.core.next(seq__26444_26458__$1);
var G__26466 = null;
var G__26467 = 0;
var G__26468 = 0;
seq__26444_26448 = G__26465;
chunk__26445_26449 = G__26466;
count__26446_26450 = G__26467;
i__26447_26451 = G__26468;
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
{var value_26479 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26475_26480 = cljs.core.seq(domina.nodes(content));var chunk__26476_26481 = null;var count__26477_26482 = 0;var i__26478_26483 = 0;while(true){
if((i__26478_26483 < count__26477_26482))
{var node_26484 = chunk__26476_26481.cljs$core$IIndexed$_nth$arity$2(null,i__26478_26483);node_26484.innerHTML = value_26479;
{
var G__26485 = seq__26475_26480;
var G__26486 = chunk__26476_26481;
var G__26487 = count__26477_26482;
var G__26488 = (i__26478_26483 + 1);
seq__26475_26480 = G__26485;
chunk__26476_26481 = G__26486;
count__26477_26482 = G__26487;
i__26478_26483 = G__26488;
continue;
}
} else
{var temp__4092__auto___26489 = cljs.core.seq(seq__26475_26480);if(temp__4092__auto___26489)
{var seq__26475_26490__$1 = temp__4092__auto___26489;if(cljs.core.chunked_seq_QMARK_(seq__26475_26490__$1))
{var c__4148__auto___26491 = cljs.core.chunk_first(seq__26475_26490__$1);{
var G__26492 = cljs.core.chunk_rest(seq__26475_26490__$1);
var G__26493 = c__4148__auto___26491;
var G__26494 = cljs.core.count(c__4148__auto___26491);
var G__26495 = 0;
seq__26475_26480 = G__26492;
chunk__26476_26481 = G__26493;
count__26477_26482 = G__26494;
i__26478_26483 = G__26495;
continue;
}
} else
{var node_26496 = cljs.core.first(seq__26475_26490__$1);node_26496.innerHTML = value_26479;
{
var G__26497 = cljs.core.next(seq__26475_26490__$1);
var G__26498 = null;
var G__26499 = 0;
var G__26500 = 0;
seq__26475_26480 = G__26497;
chunk__26476_26481 = G__26498;
count__26477_26482 = G__26499;
i__26478_26483 = G__26500;
continue;
}
}
} else
{}
}
break;
}
}catch (e26474){if((e26474 instanceof Error))
{var e_26501 = e26474;domina.replace_children_BANG_(content,value_26479);
} else
{if(cljs.core.constant$keyword$159)
{throw e26474;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26508_26512 = cljs.core.seq(children);var chunk__26509_26513 = null;var count__26510_26514 = 0;var i__26511_26515 = 0;while(true){
if((i__26511_26515 < count__26510_26514))
{var child_26516 = chunk__26509_26513.cljs$core$IIndexed$_nth$arity$2(null,i__26511_26515);frag.appendChild(child_26516);
{
var G__26517 = seq__26508_26512;
var G__26518 = chunk__26509_26513;
var G__26519 = count__26510_26514;
var G__26520 = (i__26511_26515 + 1);
seq__26508_26512 = G__26517;
chunk__26509_26513 = G__26518;
count__26510_26514 = G__26519;
i__26511_26515 = G__26520;
continue;
}
} else
{var temp__4092__auto___26521 = cljs.core.seq(seq__26508_26512);if(temp__4092__auto___26521)
{var seq__26508_26522__$1 = temp__4092__auto___26521;if(cljs.core.chunked_seq_QMARK_(seq__26508_26522__$1))
{var c__4148__auto___26523 = cljs.core.chunk_first(seq__26508_26522__$1);{
var G__26524 = cljs.core.chunk_rest(seq__26508_26522__$1);
var G__26525 = c__4148__auto___26523;
var G__26526 = cljs.core.count(c__4148__auto___26523);
var G__26527 = 0;
seq__26508_26512 = G__26524;
chunk__26509_26513 = G__26525;
count__26510_26514 = G__26526;
i__26511_26515 = G__26527;
continue;
}
} else
{var child_26528 = cljs.core.first(seq__26508_26522__$1);frag.appendChild(child_26528);
{
var G__26529 = cljs.core.next(seq__26508_26522__$1);
var G__26530 = null;
var G__26531 = 0;
var G__26532 = 0;
seq__26508_26512 = G__26529;
chunk__26509_26513 = G__26530;
count__26510_26514 = G__26531;
i__26511_26515 = G__26532;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26502_SHARP_,p2__26503_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26502_SHARP_,p2__26503_SHARP_) : f.call(null,p1__26502_SHARP_,p2__26503_SHARP_));
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
{if((function (){var G__26534 = list_thing;if(G__26534)
{var bit__4050__auto__ = (G__26534.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26534.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26534.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26534);
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
{if((function (){var G__26535 = content;if(G__26535)
{var bit__4050__auto__ = (G__26535.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26535.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26535.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26535);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26535);
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
{if((function (){var G__26536 = content;if(G__26536)
{var bit__4050__auto__ = (G__26536.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26536.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26536);
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
