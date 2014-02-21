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
var opt_wrapper_17118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17119 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17120 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17119,table_section_wrapper_17119,opt_wrapper_17118,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17120,table_section_wrapper_17119,cell_wrapper_17120,opt_wrapper_17118,table_section_wrapper_17119,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17119]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17125 = cljs.core.seq.call(null,tbody);var chunk__17126 = null;var count__17127 = 0;var i__17128 = 0;while(true){
if((i__17128 < count__17127))
{var child = cljs.core._nth.call(null,chunk__17126,i__17128);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17129 = seq__17125;
var G__17130 = chunk__17126;
var G__17131 = count__17127;
var G__17132 = (i__17128 + 1);
seq__17125 = G__17129;
chunk__17126 = G__17130;
count__17127 = G__17131;
i__17128 = G__17132;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17125);if(temp__4092__auto__)
{var seq__17125__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17125__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17125__$1);{
var G__17133 = cljs.core.chunk_rest.call(null,seq__17125__$1);
var G__17134 = c__4148__auto__;
var G__17135 = cljs.core.count.call(null,c__4148__auto__);
var G__17136 = 0;
seq__17125 = G__17133;
chunk__17126 = G__17134;
count__17127 = G__17135;
i__17128 = G__17136;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17125__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17137 = cljs.core.next.call(null,seq__17125__$1);
var G__17138 = null;
var G__17139 = 0;
var G__17140 = 0;
seq__17125 = G__17137;
chunk__17126 = G__17138;
count__17127 = G__17139;
i__17128 = G__17140;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17142 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17142,0,null);var start_wrap = cljs.core.nth.call(null,vec__17142,1,null);var end_wrap = cljs.core.nth.call(null,vec__17142,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17143 = wrapper.lastChild;
var G__17144 = (level - 1);
wrapper = G__17143;
level = G__17144;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17146 = {};return obj17146;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17147){
var mesg = cljs.core.seq(arglist__17147);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17148){
var mesg = cljs.core.seq(arglist__17148);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17149){
var contents = cljs.core.seq(arglist__17149);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17150_SHARP_){return p1__17150_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17151_SHARP_,p2__17152_SHARP_){return goog.dom.insertChildAt(p1__17151_SHARP_,p2__17152_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17154_SHARP_,p2__17153_SHARP_){return goog.dom.insertSiblingBefore(p2__17153_SHARP_,p1__17154_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17156_SHARP_,p2__17155_SHARP_){return goog.dom.insertSiblingAfter(p2__17155_SHARP_,p1__17156_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17158_SHARP_,p2__17157_SHARP_){return goog.dom.replaceNode(p2__17157_SHARP_,p1__17158_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17163_17167 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17164_17168 = null;var count__17165_17169 = 0;var i__17166_17170 = 0;while(true){
if((i__17166_17170 < count__17165_17169))
{var n_17171 = cljs.core._nth.call(null,chunk__17164_17168,i__17166_17170);goog.style.setStyle(n_17171,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17172 = seq__17163_17167;
var G__17173 = chunk__17164_17168;
var G__17174 = count__17165_17169;
var G__17175 = (i__17166_17170 + 1);
seq__17163_17167 = G__17172;
chunk__17164_17168 = G__17173;
count__17165_17169 = G__17174;
i__17166_17170 = G__17175;
continue;
}
} else
{var temp__4092__auto___17176 = cljs.core.seq.call(null,seq__17163_17167);if(temp__4092__auto___17176)
{var seq__17163_17177__$1 = temp__4092__auto___17176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17163_17177__$1))
{var c__4148__auto___17178 = cljs.core.chunk_first.call(null,seq__17163_17177__$1);{
var G__17179 = cljs.core.chunk_rest.call(null,seq__17163_17177__$1);
var G__17180 = c__4148__auto___17178;
var G__17181 = cljs.core.count.call(null,c__4148__auto___17178);
var G__17182 = 0;
seq__17163_17167 = G__17179;
chunk__17164_17168 = G__17180;
count__17165_17169 = G__17181;
i__17166_17170 = G__17182;
continue;
}
} else
{var n_17183 = cljs.core.first.call(null,seq__17163_17177__$1);goog.style.setStyle(n_17183,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17184 = cljs.core.next.call(null,seq__17163_17177__$1);
var G__17185 = null;
var G__17186 = 0;
var G__17187 = 0;
seq__17163_17167 = G__17184;
chunk__17164_17168 = G__17185;
count__17165_17169 = G__17186;
i__17166_17170 = G__17187;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17188){
var content = cljs.core.first(arglist__17188);
arglist__17188 = cljs.core.next(arglist__17188);
var name = cljs.core.first(arglist__17188);
var value = cljs.core.rest(arglist__17188);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17193_17197 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17194_17198 = null;var count__17195_17199 = 0;var i__17196_17200 = 0;while(true){
if((i__17196_17200 < count__17195_17199))
{var n_17201 = cljs.core._nth.call(null,chunk__17194_17198,i__17196_17200);n_17201.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17202 = seq__17193_17197;
var G__17203 = chunk__17194_17198;
var G__17204 = count__17195_17199;
var G__17205 = (i__17196_17200 + 1);
seq__17193_17197 = G__17202;
chunk__17194_17198 = G__17203;
count__17195_17199 = G__17204;
i__17196_17200 = G__17205;
continue;
}
} else
{var temp__4092__auto___17206 = cljs.core.seq.call(null,seq__17193_17197);if(temp__4092__auto___17206)
{var seq__17193_17207__$1 = temp__4092__auto___17206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17193_17207__$1))
{var c__4148__auto___17208 = cljs.core.chunk_first.call(null,seq__17193_17207__$1);{
var G__17209 = cljs.core.chunk_rest.call(null,seq__17193_17207__$1);
var G__17210 = c__4148__auto___17208;
var G__17211 = cljs.core.count.call(null,c__4148__auto___17208);
var G__17212 = 0;
seq__17193_17197 = G__17209;
chunk__17194_17198 = G__17210;
count__17195_17199 = G__17211;
i__17196_17200 = G__17212;
continue;
}
} else
{var n_17213 = cljs.core.first.call(null,seq__17193_17207__$1);n_17213.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17214 = cljs.core.next.call(null,seq__17193_17207__$1);
var G__17215 = null;
var G__17216 = 0;
var G__17217 = 0;
seq__17193_17197 = G__17214;
chunk__17194_17198 = G__17215;
count__17195_17199 = G__17216;
i__17196_17200 = G__17217;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17218){
var content = cljs.core.first(arglist__17218);
arglist__17218 = cljs.core.next(arglist__17218);
var name = cljs.core.first(arglist__17218);
var value = cljs.core.rest(arglist__17218);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17223_17227 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17224_17228 = null;var count__17225_17229 = 0;var i__17226_17230 = 0;while(true){
if((i__17226_17230 < count__17225_17229))
{var n_17231 = cljs.core._nth.call(null,chunk__17224_17228,i__17226_17230);n_17231.removeAttribute(cljs.core.name.call(null,name));
{
var G__17232 = seq__17223_17227;
var G__17233 = chunk__17224_17228;
var G__17234 = count__17225_17229;
var G__17235 = (i__17226_17230 + 1);
seq__17223_17227 = G__17232;
chunk__17224_17228 = G__17233;
count__17225_17229 = G__17234;
i__17226_17230 = G__17235;
continue;
}
} else
{var temp__4092__auto___17236 = cljs.core.seq.call(null,seq__17223_17227);if(temp__4092__auto___17236)
{var seq__17223_17237__$1 = temp__4092__auto___17236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17223_17237__$1))
{var c__4148__auto___17238 = cljs.core.chunk_first.call(null,seq__17223_17237__$1);{
var G__17239 = cljs.core.chunk_rest.call(null,seq__17223_17237__$1);
var G__17240 = c__4148__auto___17238;
var G__17241 = cljs.core.count.call(null,c__4148__auto___17238);
var G__17242 = 0;
seq__17223_17227 = G__17239;
chunk__17224_17228 = G__17240;
count__17225_17229 = G__17241;
i__17226_17230 = G__17242;
continue;
}
} else
{var n_17243 = cljs.core.first.call(null,seq__17223_17237__$1);n_17243.removeAttribute(cljs.core.name.call(null,name));
{
var G__17244 = cljs.core.next.call(null,seq__17223_17237__$1);
var G__17245 = null;
var G__17246 = 0;
var G__17247 = 0;
seq__17223_17227 = G__17244;
chunk__17224_17228 = G__17245;
count__17225_17229 = G__17246;
i__17226_17230 = G__17247;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17249 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17249,0,null);var v = cljs.core.nth.call(null,vec__17249,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17250_SHARP_){var attr = attrs__$1.item(p1__17250_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17257_17263 = cljs.core.seq.call(null,styles);var chunk__17258_17264 = null;var count__17259_17265 = 0;var i__17260_17266 = 0;while(true){
if((i__17260_17266 < count__17259_17265))
{var vec__17261_17267 = cljs.core._nth.call(null,chunk__17258_17264,i__17260_17266);var name_17268 = cljs.core.nth.call(null,vec__17261_17267,0,null);var value_17269 = cljs.core.nth.call(null,vec__17261_17267,1,null);domina.set_style_BANG_.call(null,content,name_17268,value_17269);
{
var G__17270 = seq__17257_17263;
var G__17271 = chunk__17258_17264;
var G__17272 = count__17259_17265;
var G__17273 = (i__17260_17266 + 1);
seq__17257_17263 = G__17270;
chunk__17258_17264 = G__17271;
count__17259_17265 = G__17272;
i__17260_17266 = G__17273;
continue;
}
} else
{var temp__4092__auto___17274 = cljs.core.seq.call(null,seq__17257_17263);if(temp__4092__auto___17274)
{var seq__17257_17275__$1 = temp__4092__auto___17274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17257_17275__$1))
{var c__4148__auto___17276 = cljs.core.chunk_first.call(null,seq__17257_17275__$1);{
var G__17277 = cljs.core.chunk_rest.call(null,seq__17257_17275__$1);
var G__17278 = c__4148__auto___17276;
var G__17279 = cljs.core.count.call(null,c__4148__auto___17276);
var G__17280 = 0;
seq__17257_17263 = G__17277;
chunk__17258_17264 = G__17278;
count__17259_17265 = G__17279;
i__17260_17266 = G__17280;
continue;
}
} else
{var vec__17262_17281 = cljs.core.first.call(null,seq__17257_17275__$1);var name_17282 = cljs.core.nth.call(null,vec__17262_17281,0,null);var value_17283 = cljs.core.nth.call(null,vec__17262_17281,1,null);domina.set_style_BANG_.call(null,content,name_17282,value_17283);
{
var G__17284 = cljs.core.next.call(null,seq__17257_17275__$1);
var G__17285 = null;
var G__17286 = 0;
var G__17287 = 0;
seq__17257_17263 = G__17284;
chunk__17258_17264 = G__17285;
count__17259_17265 = G__17286;
i__17260_17266 = G__17287;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17294_17300 = cljs.core.seq.call(null,attrs);var chunk__17295_17301 = null;var count__17296_17302 = 0;var i__17297_17303 = 0;while(true){
if((i__17297_17303 < count__17296_17302))
{var vec__17298_17304 = cljs.core._nth.call(null,chunk__17295_17301,i__17297_17303);var name_17305 = cljs.core.nth.call(null,vec__17298_17304,0,null);var value_17306 = cljs.core.nth.call(null,vec__17298_17304,1,null);domina.set_attr_BANG_.call(null,content,name_17305,value_17306);
{
var G__17307 = seq__17294_17300;
var G__17308 = chunk__17295_17301;
var G__17309 = count__17296_17302;
var G__17310 = (i__17297_17303 + 1);
seq__17294_17300 = G__17307;
chunk__17295_17301 = G__17308;
count__17296_17302 = G__17309;
i__17297_17303 = G__17310;
continue;
}
} else
{var temp__4092__auto___17311 = cljs.core.seq.call(null,seq__17294_17300);if(temp__4092__auto___17311)
{var seq__17294_17312__$1 = temp__4092__auto___17311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17294_17312__$1))
{var c__4148__auto___17313 = cljs.core.chunk_first.call(null,seq__17294_17312__$1);{
var G__17314 = cljs.core.chunk_rest.call(null,seq__17294_17312__$1);
var G__17315 = c__4148__auto___17313;
var G__17316 = cljs.core.count.call(null,c__4148__auto___17313);
var G__17317 = 0;
seq__17294_17300 = G__17314;
chunk__17295_17301 = G__17315;
count__17296_17302 = G__17316;
i__17297_17303 = G__17317;
continue;
}
} else
{var vec__17299_17318 = cljs.core.first.call(null,seq__17294_17312__$1);var name_17319 = cljs.core.nth.call(null,vec__17299_17318,0,null);var value_17320 = cljs.core.nth.call(null,vec__17299_17318,1,null);domina.set_attr_BANG_.call(null,content,name_17319,value_17320);
{
var G__17321 = cljs.core.next.call(null,seq__17294_17312__$1);
var G__17322 = null;
var G__17323 = 0;
var G__17324 = 0;
seq__17294_17300 = G__17321;
chunk__17295_17301 = G__17322;
count__17296_17302 = G__17323;
i__17297_17303 = G__17324;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17329_17333 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17330_17334 = null;var count__17331_17335 = 0;var i__17332_17336 = 0;while(true){
if((i__17332_17336 < count__17331_17335))
{var node_17337 = cljs.core._nth.call(null,chunk__17330_17334,i__17332_17336);goog.dom.classes.add(node_17337,class$);
{
var G__17338 = seq__17329_17333;
var G__17339 = chunk__17330_17334;
var G__17340 = count__17331_17335;
var G__17341 = (i__17332_17336 + 1);
seq__17329_17333 = G__17338;
chunk__17330_17334 = G__17339;
count__17331_17335 = G__17340;
i__17332_17336 = G__17341;
continue;
}
} else
{var temp__4092__auto___17342 = cljs.core.seq.call(null,seq__17329_17333);if(temp__4092__auto___17342)
{var seq__17329_17343__$1 = temp__4092__auto___17342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17329_17343__$1))
{var c__4148__auto___17344 = cljs.core.chunk_first.call(null,seq__17329_17343__$1);{
var G__17345 = cljs.core.chunk_rest.call(null,seq__17329_17343__$1);
var G__17346 = c__4148__auto___17344;
var G__17347 = cljs.core.count.call(null,c__4148__auto___17344);
var G__17348 = 0;
seq__17329_17333 = G__17345;
chunk__17330_17334 = G__17346;
count__17331_17335 = G__17347;
i__17332_17336 = G__17348;
continue;
}
} else
{var node_17349 = cljs.core.first.call(null,seq__17329_17343__$1);goog.dom.classes.add(node_17349,class$);
{
var G__17350 = cljs.core.next.call(null,seq__17329_17343__$1);
var G__17351 = null;
var G__17352 = 0;
var G__17353 = 0;
seq__17329_17333 = G__17350;
chunk__17330_17334 = G__17351;
count__17331_17335 = G__17352;
i__17332_17336 = G__17353;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17358_17362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17359_17363 = null;var count__17360_17364 = 0;var i__17361_17365 = 0;while(true){
if((i__17361_17365 < count__17360_17364))
{var node_17366 = cljs.core._nth.call(null,chunk__17359_17363,i__17361_17365);goog.dom.classes.remove(node_17366,class$);
{
var G__17367 = seq__17358_17362;
var G__17368 = chunk__17359_17363;
var G__17369 = count__17360_17364;
var G__17370 = (i__17361_17365 + 1);
seq__17358_17362 = G__17367;
chunk__17359_17363 = G__17368;
count__17360_17364 = G__17369;
i__17361_17365 = G__17370;
continue;
}
} else
{var temp__4092__auto___17371 = cljs.core.seq.call(null,seq__17358_17362);if(temp__4092__auto___17371)
{var seq__17358_17372__$1 = temp__4092__auto___17371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17358_17372__$1))
{var c__4148__auto___17373 = cljs.core.chunk_first.call(null,seq__17358_17372__$1);{
var G__17374 = cljs.core.chunk_rest.call(null,seq__17358_17372__$1);
var G__17375 = c__4148__auto___17373;
var G__17376 = cljs.core.count.call(null,c__4148__auto___17373);
var G__17377 = 0;
seq__17358_17362 = G__17374;
chunk__17359_17363 = G__17375;
count__17360_17364 = G__17376;
i__17361_17365 = G__17377;
continue;
}
} else
{var node_17378 = cljs.core.first.call(null,seq__17358_17372__$1);goog.dom.classes.remove(node_17378,class$);
{
var G__17379 = cljs.core.next.call(null,seq__17358_17372__$1);
var G__17380 = null;
var G__17381 = 0;
var G__17382 = 0;
seq__17358_17362 = G__17379;
chunk__17359_17363 = G__17380;
count__17360_17364 = G__17381;
i__17361_17365 = G__17382;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17387_17391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17388_17392 = null;var count__17389_17393 = 0;var i__17390_17394 = 0;while(true){
if((i__17390_17394 < count__17389_17393))
{var node_17395 = cljs.core._nth.call(null,chunk__17388_17392,i__17390_17394);goog.dom.classes.toggle(node_17395,class$);
{
var G__17396 = seq__17387_17391;
var G__17397 = chunk__17388_17392;
var G__17398 = count__17389_17393;
var G__17399 = (i__17390_17394 + 1);
seq__17387_17391 = G__17396;
chunk__17388_17392 = G__17397;
count__17389_17393 = G__17398;
i__17390_17394 = G__17399;
continue;
}
} else
{var temp__4092__auto___17400 = cljs.core.seq.call(null,seq__17387_17391);if(temp__4092__auto___17400)
{var seq__17387_17401__$1 = temp__4092__auto___17400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17387_17401__$1))
{var c__4148__auto___17402 = cljs.core.chunk_first.call(null,seq__17387_17401__$1);{
var G__17403 = cljs.core.chunk_rest.call(null,seq__17387_17401__$1);
var G__17404 = c__4148__auto___17402;
var G__17405 = cljs.core.count.call(null,c__4148__auto___17402);
var G__17406 = 0;
seq__17387_17391 = G__17403;
chunk__17388_17392 = G__17404;
count__17389_17393 = G__17405;
i__17390_17394 = G__17406;
continue;
}
} else
{var node_17407 = cljs.core.first.call(null,seq__17387_17401__$1);goog.dom.classes.toggle(node_17407,class$);
{
var G__17408 = cljs.core.next.call(null,seq__17387_17401__$1);
var G__17409 = null;
var G__17410 = 0;
var G__17411 = 0;
seq__17387_17391 = G__17408;
chunk__17388_17392 = G__17409;
count__17389_17393 = G__17410;
i__17390_17394 = G__17411;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17420__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17416_17421 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17417_17422 = null;var count__17418_17423 = 0;var i__17419_17424 = 0;while(true){
if((i__17419_17424 < count__17418_17423))
{var node_17425 = cljs.core._nth.call(null,chunk__17417_17422,i__17419_17424);goog.dom.classes.set(node_17425,classes_17420__$1);
{
var G__17426 = seq__17416_17421;
var G__17427 = chunk__17417_17422;
var G__17428 = count__17418_17423;
var G__17429 = (i__17419_17424 + 1);
seq__17416_17421 = G__17426;
chunk__17417_17422 = G__17427;
count__17418_17423 = G__17428;
i__17419_17424 = G__17429;
continue;
}
} else
{var temp__4092__auto___17430 = cljs.core.seq.call(null,seq__17416_17421);if(temp__4092__auto___17430)
{var seq__17416_17431__$1 = temp__4092__auto___17430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17416_17431__$1))
{var c__4148__auto___17432 = cljs.core.chunk_first.call(null,seq__17416_17431__$1);{
var G__17433 = cljs.core.chunk_rest.call(null,seq__17416_17431__$1);
var G__17434 = c__4148__auto___17432;
var G__17435 = cljs.core.count.call(null,c__4148__auto___17432);
var G__17436 = 0;
seq__17416_17421 = G__17433;
chunk__17417_17422 = G__17434;
count__17418_17423 = G__17435;
i__17419_17424 = G__17436;
continue;
}
} else
{var node_17437 = cljs.core.first.call(null,seq__17416_17431__$1);goog.dom.classes.set(node_17437,classes_17420__$1);
{
var G__17438 = cljs.core.next.call(null,seq__17416_17431__$1);
var G__17439 = null;
var G__17440 = 0;
var G__17441 = 0;
seq__17416_17421 = G__17438;
chunk__17417_17422 = G__17439;
count__17418_17423 = G__17440;
i__17419_17424 = G__17441;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17446_17450 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17447_17451 = null;var count__17448_17452 = 0;var i__17449_17453 = 0;while(true){
if((i__17449_17453 < count__17448_17452))
{var node_17454 = cljs.core._nth.call(null,chunk__17447_17451,i__17449_17453);goog.dom.setTextContent(node_17454,value);
{
var G__17455 = seq__17446_17450;
var G__17456 = chunk__17447_17451;
var G__17457 = count__17448_17452;
var G__17458 = (i__17449_17453 + 1);
seq__17446_17450 = G__17455;
chunk__17447_17451 = G__17456;
count__17448_17452 = G__17457;
i__17449_17453 = G__17458;
continue;
}
} else
{var temp__4092__auto___17459 = cljs.core.seq.call(null,seq__17446_17450);if(temp__4092__auto___17459)
{var seq__17446_17460__$1 = temp__4092__auto___17459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17446_17460__$1))
{var c__4148__auto___17461 = cljs.core.chunk_first.call(null,seq__17446_17460__$1);{
var G__17462 = cljs.core.chunk_rest.call(null,seq__17446_17460__$1);
var G__17463 = c__4148__auto___17461;
var G__17464 = cljs.core.count.call(null,c__4148__auto___17461);
var G__17465 = 0;
seq__17446_17450 = G__17462;
chunk__17447_17451 = G__17463;
count__17448_17452 = G__17464;
i__17449_17453 = G__17465;
continue;
}
} else
{var node_17466 = cljs.core.first.call(null,seq__17446_17460__$1);goog.dom.setTextContent(node_17466,value);
{
var G__17467 = cljs.core.next.call(null,seq__17446_17460__$1);
var G__17468 = null;
var G__17469 = 0;
var G__17470 = 0;
seq__17446_17450 = G__17467;
chunk__17447_17451 = G__17468;
count__17448_17452 = G__17469;
i__17449_17453 = G__17470;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17475_17479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17476_17480 = null;var count__17477_17481 = 0;var i__17478_17482 = 0;while(true){
if((i__17478_17482 < count__17477_17481))
{var node_17483 = cljs.core._nth.call(null,chunk__17476_17480,i__17478_17482);goog.dom.forms.setValue(node_17483,value);
{
var G__17484 = seq__17475_17479;
var G__17485 = chunk__17476_17480;
var G__17486 = count__17477_17481;
var G__17487 = (i__17478_17482 + 1);
seq__17475_17479 = G__17484;
chunk__17476_17480 = G__17485;
count__17477_17481 = G__17486;
i__17478_17482 = G__17487;
continue;
}
} else
{var temp__4092__auto___17488 = cljs.core.seq.call(null,seq__17475_17479);if(temp__4092__auto___17488)
{var seq__17475_17489__$1 = temp__4092__auto___17488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17475_17489__$1))
{var c__4148__auto___17490 = cljs.core.chunk_first.call(null,seq__17475_17489__$1);{
var G__17491 = cljs.core.chunk_rest.call(null,seq__17475_17489__$1);
var G__17492 = c__4148__auto___17490;
var G__17493 = cljs.core.count.call(null,c__4148__auto___17490);
var G__17494 = 0;
seq__17475_17479 = G__17491;
chunk__17476_17480 = G__17492;
count__17477_17481 = G__17493;
i__17478_17482 = G__17494;
continue;
}
} else
{var node_17495 = cljs.core.first.call(null,seq__17475_17489__$1);goog.dom.forms.setValue(node_17495,value);
{
var G__17496 = cljs.core.next.call(null,seq__17475_17489__$1);
var G__17497 = null;
var G__17498 = 0;
var G__17499 = 0;
seq__17475_17479 = G__17496;
chunk__17476_17480 = G__17497;
count__17477_17481 = G__17498;
i__17478_17482 = G__17499;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_17510 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17506_17511 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17507_17512 = null;var count__17508_17513 = 0;var i__17509_17514 = 0;while(true){
if((i__17509_17514 < count__17508_17513))
{var node_17515 = cljs.core._nth.call(null,chunk__17507_17512,i__17509_17514);node_17515.innerHTML = value_17510;
{
var G__17516 = seq__17506_17511;
var G__17517 = chunk__17507_17512;
var G__17518 = count__17508_17513;
var G__17519 = (i__17509_17514 + 1);
seq__17506_17511 = G__17516;
chunk__17507_17512 = G__17517;
count__17508_17513 = G__17518;
i__17509_17514 = G__17519;
continue;
}
} else
{var temp__4092__auto___17520 = cljs.core.seq.call(null,seq__17506_17511);if(temp__4092__auto___17520)
{var seq__17506_17521__$1 = temp__4092__auto___17520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17506_17521__$1))
{var c__4148__auto___17522 = cljs.core.chunk_first.call(null,seq__17506_17521__$1);{
var G__17523 = cljs.core.chunk_rest.call(null,seq__17506_17521__$1);
var G__17524 = c__4148__auto___17522;
var G__17525 = cljs.core.count.call(null,c__4148__auto___17522);
var G__17526 = 0;
seq__17506_17511 = G__17523;
chunk__17507_17512 = G__17524;
count__17508_17513 = G__17525;
i__17509_17514 = G__17526;
continue;
}
} else
{var node_17527 = cljs.core.first.call(null,seq__17506_17521__$1);node_17527.innerHTML = value_17510;
{
var G__17528 = cljs.core.next.call(null,seq__17506_17521__$1);
var G__17529 = null;
var G__17530 = 0;
var G__17531 = 0;
seq__17506_17511 = G__17528;
chunk__17507_17512 = G__17529;
count__17508_17513 = G__17530;
i__17509_17514 = G__17531;
continue;
}
}
} else
{}
}
break;
}
}catch (e17505){if((e17505 instanceof Error))
{var e_17532 = e17505;domina.replace_children_BANG_.call(null,content,value_17510);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17505;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17539_17543 = cljs.core.seq.call(null,children);var chunk__17540_17544 = null;var count__17541_17545 = 0;var i__17542_17546 = 0;while(true){
if((i__17542_17546 < count__17541_17545))
{var child_17547 = cljs.core._nth.call(null,chunk__17540_17544,i__17542_17546);frag.appendChild(child_17547);
{
var G__17548 = seq__17539_17543;
var G__17549 = chunk__17540_17544;
var G__17550 = count__17541_17545;
var G__17551 = (i__17542_17546 + 1);
seq__17539_17543 = G__17548;
chunk__17540_17544 = G__17549;
count__17541_17545 = G__17550;
i__17542_17546 = G__17551;
continue;
}
} else
{var temp__4092__auto___17552 = cljs.core.seq.call(null,seq__17539_17543);if(temp__4092__auto___17552)
{var seq__17539_17553__$1 = temp__4092__auto___17552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17539_17553__$1))
{var c__4148__auto___17554 = cljs.core.chunk_first.call(null,seq__17539_17553__$1);{
var G__17555 = cljs.core.chunk_rest.call(null,seq__17539_17553__$1);
var G__17556 = c__4148__auto___17554;
var G__17557 = cljs.core.count.call(null,c__4148__auto___17554);
var G__17558 = 0;
seq__17539_17543 = G__17555;
chunk__17540_17544 = G__17556;
count__17541_17545 = G__17557;
i__17542_17546 = G__17558;
continue;
}
} else
{var child_17559 = cljs.core.first.call(null,seq__17539_17553__$1);frag.appendChild(child_17559);
{
var G__17560 = cljs.core.next.call(null,seq__17539_17553__$1);
var G__17561 = null;
var G__17562 = 0;
var G__17563 = 0;
seq__17539_17543 = G__17560;
chunk__17540_17544 = G__17561;
count__17541_17545 = G__17562;
i__17542_17546 = G__17563;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17533_SHARP_,p2__17534_SHARP_){return f.call(null,p1__17533_SHARP_,p2__17534_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__17565 = list_thing;if(G__17565)
{var bit__4050__auto__ = (G__17565.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17565.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17565);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17565);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__17566 = content;if(G__17566)
{var bit__4050__auto__ = (G__17566.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17566.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17566.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17566);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17566);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__17567 = content;if(G__17567)
{var bit__4050__auto__ = (G__17567.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17567.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17567.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17567);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17567);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map