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
var opt_wrapper_15140 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15141 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15142 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15141,table_section_wrapper_15141,opt_wrapper_15140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15142,table_section_wrapper_15141,cell_wrapper_15142,opt_wrapper_15140,table_section_wrapper_15141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15141]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15147 = cljs.core.seq.call(null,tbody);var chunk__15148 = null;var count__15149 = 0;var i__15150 = 0;while(true){
if((i__15150 < count__15149))
{var child = cljs.core._nth.call(null,chunk__15148,i__15150);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15151 = seq__15147;
var G__15152 = chunk__15148;
var G__15153 = count__15149;
var G__15154 = (i__15150 + 1);
seq__15147 = G__15151;
chunk__15148 = G__15152;
count__15149 = G__15153;
i__15150 = G__15154;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15147);if(temp__4092__auto__)
{var seq__15147__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15147__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15147__$1);{
var G__15155 = cljs.core.chunk_rest.call(null,seq__15147__$1);
var G__15156 = c__4148__auto__;
var G__15157 = cljs.core.count.call(null,c__4148__auto__);
var G__15158 = 0;
seq__15147 = G__15155;
chunk__15148 = G__15156;
count__15149 = G__15157;
i__15150 = G__15158;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15147__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15159 = cljs.core.next.call(null,seq__15147__$1);
var G__15160 = null;
var G__15161 = 0;
var G__15162 = 0;
seq__15147 = G__15159;
chunk__15148 = G__15160;
count__15149 = G__15161;
i__15150 = G__15162;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15164 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15164,0,null);var start_wrap = cljs.core.nth.call(null,vec__15164,1,null);var end_wrap = cljs.core.nth.call(null,vec__15164,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15165 = wrapper.lastChild;
var G__15166 = (level - 1);
wrapper = G__15165;
level = G__15166;
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
domina.DomContent = (function (){var obj15168 = {};return obj15168;
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
log_debug.cljs$lang$applyTo = (function (arglist__15169){
var mesg = cljs.core.seq(arglist__15169);
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
log.cljs$lang$applyTo = (function (arglist__15170){
var mesg = cljs.core.seq(arglist__15170);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15171){
var contents = cljs.core.seq(arglist__15171);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15172_SHARP_){return p1__15172_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15173_SHARP_,p2__15174_SHARP_){return goog.dom.insertChildAt(p1__15173_SHARP_,p2__15174_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15176_SHARP_,p2__15175_SHARP_){return goog.dom.insertSiblingBefore(p2__15175_SHARP_,p1__15176_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15178_SHARP_,p2__15177_SHARP_){return goog.dom.insertSiblingAfter(p2__15177_SHARP_,p1__15178_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15180_SHARP_,p2__15179_SHARP_){return goog.dom.replaceNode(p2__15179_SHARP_,p1__15180_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15185_15189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15186_15190 = null;var count__15187_15191 = 0;var i__15188_15192 = 0;while(true){
if((i__15188_15192 < count__15187_15191))
{var n_15193 = cljs.core._nth.call(null,chunk__15186_15190,i__15188_15192);goog.style.setStyle(n_15193,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15194 = seq__15185_15189;
var G__15195 = chunk__15186_15190;
var G__15196 = count__15187_15191;
var G__15197 = (i__15188_15192 + 1);
seq__15185_15189 = G__15194;
chunk__15186_15190 = G__15195;
count__15187_15191 = G__15196;
i__15188_15192 = G__15197;
continue;
}
} else
{var temp__4092__auto___15198 = cljs.core.seq.call(null,seq__15185_15189);if(temp__4092__auto___15198)
{var seq__15185_15199__$1 = temp__4092__auto___15198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15185_15199__$1))
{var c__4148__auto___15200 = cljs.core.chunk_first.call(null,seq__15185_15199__$1);{
var G__15201 = cljs.core.chunk_rest.call(null,seq__15185_15199__$1);
var G__15202 = c__4148__auto___15200;
var G__15203 = cljs.core.count.call(null,c__4148__auto___15200);
var G__15204 = 0;
seq__15185_15189 = G__15201;
chunk__15186_15190 = G__15202;
count__15187_15191 = G__15203;
i__15188_15192 = G__15204;
continue;
}
} else
{var n_15205 = cljs.core.first.call(null,seq__15185_15199__$1);goog.style.setStyle(n_15205,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15206 = cljs.core.next.call(null,seq__15185_15199__$1);
var G__15207 = null;
var G__15208 = 0;
var G__15209 = 0;
seq__15185_15189 = G__15206;
chunk__15186_15190 = G__15207;
count__15187_15191 = G__15208;
i__15188_15192 = G__15209;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15210){
var content = cljs.core.first(arglist__15210);
arglist__15210 = cljs.core.next(arglist__15210);
var name = cljs.core.first(arglist__15210);
var value = cljs.core.rest(arglist__15210);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15215_15219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15216_15220 = null;var count__15217_15221 = 0;var i__15218_15222 = 0;while(true){
if((i__15218_15222 < count__15217_15221))
{var n_15223 = cljs.core._nth.call(null,chunk__15216_15220,i__15218_15222);n_15223.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15224 = seq__15215_15219;
var G__15225 = chunk__15216_15220;
var G__15226 = count__15217_15221;
var G__15227 = (i__15218_15222 + 1);
seq__15215_15219 = G__15224;
chunk__15216_15220 = G__15225;
count__15217_15221 = G__15226;
i__15218_15222 = G__15227;
continue;
}
} else
{var temp__4092__auto___15228 = cljs.core.seq.call(null,seq__15215_15219);if(temp__4092__auto___15228)
{var seq__15215_15229__$1 = temp__4092__auto___15228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15215_15229__$1))
{var c__4148__auto___15230 = cljs.core.chunk_first.call(null,seq__15215_15229__$1);{
var G__15231 = cljs.core.chunk_rest.call(null,seq__15215_15229__$1);
var G__15232 = c__4148__auto___15230;
var G__15233 = cljs.core.count.call(null,c__4148__auto___15230);
var G__15234 = 0;
seq__15215_15219 = G__15231;
chunk__15216_15220 = G__15232;
count__15217_15221 = G__15233;
i__15218_15222 = G__15234;
continue;
}
} else
{var n_15235 = cljs.core.first.call(null,seq__15215_15229__$1);n_15235.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15236 = cljs.core.next.call(null,seq__15215_15229__$1);
var G__15237 = null;
var G__15238 = 0;
var G__15239 = 0;
seq__15215_15219 = G__15236;
chunk__15216_15220 = G__15237;
count__15217_15221 = G__15238;
i__15218_15222 = G__15239;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15240){
var content = cljs.core.first(arglist__15240);
arglist__15240 = cljs.core.next(arglist__15240);
var name = cljs.core.first(arglist__15240);
var value = cljs.core.rest(arglist__15240);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15245_15249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15246_15250 = null;var count__15247_15251 = 0;var i__15248_15252 = 0;while(true){
if((i__15248_15252 < count__15247_15251))
{var n_15253 = cljs.core._nth.call(null,chunk__15246_15250,i__15248_15252);n_15253.removeAttribute(cljs.core.name.call(null,name));
{
var G__15254 = seq__15245_15249;
var G__15255 = chunk__15246_15250;
var G__15256 = count__15247_15251;
var G__15257 = (i__15248_15252 + 1);
seq__15245_15249 = G__15254;
chunk__15246_15250 = G__15255;
count__15247_15251 = G__15256;
i__15248_15252 = G__15257;
continue;
}
} else
{var temp__4092__auto___15258 = cljs.core.seq.call(null,seq__15245_15249);if(temp__4092__auto___15258)
{var seq__15245_15259__$1 = temp__4092__auto___15258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15245_15259__$1))
{var c__4148__auto___15260 = cljs.core.chunk_first.call(null,seq__15245_15259__$1);{
var G__15261 = cljs.core.chunk_rest.call(null,seq__15245_15259__$1);
var G__15262 = c__4148__auto___15260;
var G__15263 = cljs.core.count.call(null,c__4148__auto___15260);
var G__15264 = 0;
seq__15245_15249 = G__15261;
chunk__15246_15250 = G__15262;
count__15247_15251 = G__15263;
i__15248_15252 = G__15264;
continue;
}
} else
{var n_15265 = cljs.core.first.call(null,seq__15245_15259__$1);n_15265.removeAttribute(cljs.core.name.call(null,name));
{
var G__15266 = cljs.core.next.call(null,seq__15245_15259__$1);
var G__15267 = null;
var G__15268 = 0;
var G__15269 = 0;
seq__15245_15249 = G__15266;
chunk__15246_15250 = G__15267;
count__15247_15251 = G__15268;
i__15248_15252 = G__15269;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15271 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15271,0,null);var v = cljs.core.nth.call(null,vec__15271,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15272_SHARP_){var attr = attrs__$1.item(p1__15272_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15279_15285 = cljs.core.seq.call(null,styles);var chunk__15280_15286 = null;var count__15281_15287 = 0;var i__15282_15288 = 0;while(true){
if((i__15282_15288 < count__15281_15287))
{var vec__15283_15289 = cljs.core._nth.call(null,chunk__15280_15286,i__15282_15288);var name_15290 = cljs.core.nth.call(null,vec__15283_15289,0,null);var value_15291 = cljs.core.nth.call(null,vec__15283_15289,1,null);domina.set_style_BANG_.call(null,content,name_15290,value_15291);
{
var G__15292 = seq__15279_15285;
var G__15293 = chunk__15280_15286;
var G__15294 = count__15281_15287;
var G__15295 = (i__15282_15288 + 1);
seq__15279_15285 = G__15292;
chunk__15280_15286 = G__15293;
count__15281_15287 = G__15294;
i__15282_15288 = G__15295;
continue;
}
} else
{var temp__4092__auto___15296 = cljs.core.seq.call(null,seq__15279_15285);if(temp__4092__auto___15296)
{var seq__15279_15297__$1 = temp__4092__auto___15296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15279_15297__$1))
{var c__4148__auto___15298 = cljs.core.chunk_first.call(null,seq__15279_15297__$1);{
var G__15299 = cljs.core.chunk_rest.call(null,seq__15279_15297__$1);
var G__15300 = c__4148__auto___15298;
var G__15301 = cljs.core.count.call(null,c__4148__auto___15298);
var G__15302 = 0;
seq__15279_15285 = G__15299;
chunk__15280_15286 = G__15300;
count__15281_15287 = G__15301;
i__15282_15288 = G__15302;
continue;
}
} else
{var vec__15284_15303 = cljs.core.first.call(null,seq__15279_15297__$1);var name_15304 = cljs.core.nth.call(null,vec__15284_15303,0,null);var value_15305 = cljs.core.nth.call(null,vec__15284_15303,1,null);domina.set_style_BANG_.call(null,content,name_15304,value_15305);
{
var G__15306 = cljs.core.next.call(null,seq__15279_15297__$1);
var G__15307 = null;
var G__15308 = 0;
var G__15309 = 0;
seq__15279_15285 = G__15306;
chunk__15280_15286 = G__15307;
count__15281_15287 = G__15308;
i__15282_15288 = G__15309;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15316_15322 = cljs.core.seq.call(null,attrs);var chunk__15317_15323 = null;var count__15318_15324 = 0;var i__15319_15325 = 0;while(true){
if((i__15319_15325 < count__15318_15324))
{var vec__15320_15326 = cljs.core._nth.call(null,chunk__15317_15323,i__15319_15325);var name_15327 = cljs.core.nth.call(null,vec__15320_15326,0,null);var value_15328 = cljs.core.nth.call(null,vec__15320_15326,1,null);domina.set_attr_BANG_.call(null,content,name_15327,value_15328);
{
var G__15329 = seq__15316_15322;
var G__15330 = chunk__15317_15323;
var G__15331 = count__15318_15324;
var G__15332 = (i__15319_15325 + 1);
seq__15316_15322 = G__15329;
chunk__15317_15323 = G__15330;
count__15318_15324 = G__15331;
i__15319_15325 = G__15332;
continue;
}
} else
{var temp__4092__auto___15333 = cljs.core.seq.call(null,seq__15316_15322);if(temp__4092__auto___15333)
{var seq__15316_15334__$1 = temp__4092__auto___15333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15316_15334__$1))
{var c__4148__auto___15335 = cljs.core.chunk_first.call(null,seq__15316_15334__$1);{
var G__15336 = cljs.core.chunk_rest.call(null,seq__15316_15334__$1);
var G__15337 = c__4148__auto___15335;
var G__15338 = cljs.core.count.call(null,c__4148__auto___15335);
var G__15339 = 0;
seq__15316_15322 = G__15336;
chunk__15317_15323 = G__15337;
count__15318_15324 = G__15338;
i__15319_15325 = G__15339;
continue;
}
} else
{var vec__15321_15340 = cljs.core.first.call(null,seq__15316_15334__$1);var name_15341 = cljs.core.nth.call(null,vec__15321_15340,0,null);var value_15342 = cljs.core.nth.call(null,vec__15321_15340,1,null);domina.set_attr_BANG_.call(null,content,name_15341,value_15342);
{
var G__15343 = cljs.core.next.call(null,seq__15316_15334__$1);
var G__15344 = null;
var G__15345 = 0;
var G__15346 = 0;
seq__15316_15322 = G__15343;
chunk__15317_15323 = G__15344;
count__15318_15324 = G__15345;
i__15319_15325 = G__15346;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15351_15355 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15352_15356 = null;var count__15353_15357 = 0;var i__15354_15358 = 0;while(true){
if((i__15354_15358 < count__15353_15357))
{var node_15359 = cljs.core._nth.call(null,chunk__15352_15356,i__15354_15358);goog.dom.classes.add(node_15359,class$);
{
var G__15360 = seq__15351_15355;
var G__15361 = chunk__15352_15356;
var G__15362 = count__15353_15357;
var G__15363 = (i__15354_15358 + 1);
seq__15351_15355 = G__15360;
chunk__15352_15356 = G__15361;
count__15353_15357 = G__15362;
i__15354_15358 = G__15363;
continue;
}
} else
{var temp__4092__auto___15364 = cljs.core.seq.call(null,seq__15351_15355);if(temp__4092__auto___15364)
{var seq__15351_15365__$1 = temp__4092__auto___15364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15351_15365__$1))
{var c__4148__auto___15366 = cljs.core.chunk_first.call(null,seq__15351_15365__$1);{
var G__15367 = cljs.core.chunk_rest.call(null,seq__15351_15365__$1);
var G__15368 = c__4148__auto___15366;
var G__15369 = cljs.core.count.call(null,c__4148__auto___15366);
var G__15370 = 0;
seq__15351_15355 = G__15367;
chunk__15352_15356 = G__15368;
count__15353_15357 = G__15369;
i__15354_15358 = G__15370;
continue;
}
} else
{var node_15371 = cljs.core.first.call(null,seq__15351_15365__$1);goog.dom.classes.add(node_15371,class$);
{
var G__15372 = cljs.core.next.call(null,seq__15351_15365__$1);
var G__15373 = null;
var G__15374 = 0;
var G__15375 = 0;
seq__15351_15355 = G__15372;
chunk__15352_15356 = G__15373;
count__15353_15357 = G__15374;
i__15354_15358 = G__15375;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15380_15384 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15381_15385 = null;var count__15382_15386 = 0;var i__15383_15387 = 0;while(true){
if((i__15383_15387 < count__15382_15386))
{var node_15388 = cljs.core._nth.call(null,chunk__15381_15385,i__15383_15387);goog.dom.classes.remove(node_15388,class$);
{
var G__15389 = seq__15380_15384;
var G__15390 = chunk__15381_15385;
var G__15391 = count__15382_15386;
var G__15392 = (i__15383_15387 + 1);
seq__15380_15384 = G__15389;
chunk__15381_15385 = G__15390;
count__15382_15386 = G__15391;
i__15383_15387 = G__15392;
continue;
}
} else
{var temp__4092__auto___15393 = cljs.core.seq.call(null,seq__15380_15384);if(temp__4092__auto___15393)
{var seq__15380_15394__$1 = temp__4092__auto___15393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15380_15394__$1))
{var c__4148__auto___15395 = cljs.core.chunk_first.call(null,seq__15380_15394__$1);{
var G__15396 = cljs.core.chunk_rest.call(null,seq__15380_15394__$1);
var G__15397 = c__4148__auto___15395;
var G__15398 = cljs.core.count.call(null,c__4148__auto___15395);
var G__15399 = 0;
seq__15380_15384 = G__15396;
chunk__15381_15385 = G__15397;
count__15382_15386 = G__15398;
i__15383_15387 = G__15399;
continue;
}
} else
{var node_15400 = cljs.core.first.call(null,seq__15380_15394__$1);goog.dom.classes.remove(node_15400,class$);
{
var G__15401 = cljs.core.next.call(null,seq__15380_15394__$1);
var G__15402 = null;
var G__15403 = 0;
var G__15404 = 0;
seq__15380_15384 = G__15401;
chunk__15381_15385 = G__15402;
count__15382_15386 = G__15403;
i__15383_15387 = G__15404;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15409_15413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15410_15414 = null;var count__15411_15415 = 0;var i__15412_15416 = 0;while(true){
if((i__15412_15416 < count__15411_15415))
{var node_15417 = cljs.core._nth.call(null,chunk__15410_15414,i__15412_15416);goog.dom.classes.toggle(node_15417,class$);
{
var G__15418 = seq__15409_15413;
var G__15419 = chunk__15410_15414;
var G__15420 = count__15411_15415;
var G__15421 = (i__15412_15416 + 1);
seq__15409_15413 = G__15418;
chunk__15410_15414 = G__15419;
count__15411_15415 = G__15420;
i__15412_15416 = G__15421;
continue;
}
} else
{var temp__4092__auto___15422 = cljs.core.seq.call(null,seq__15409_15413);if(temp__4092__auto___15422)
{var seq__15409_15423__$1 = temp__4092__auto___15422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15409_15423__$1))
{var c__4148__auto___15424 = cljs.core.chunk_first.call(null,seq__15409_15423__$1);{
var G__15425 = cljs.core.chunk_rest.call(null,seq__15409_15423__$1);
var G__15426 = c__4148__auto___15424;
var G__15427 = cljs.core.count.call(null,c__4148__auto___15424);
var G__15428 = 0;
seq__15409_15413 = G__15425;
chunk__15410_15414 = G__15426;
count__15411_15415 = G__15427;
i__15412_15416 = G__15428;
continue;
}
} else
{var node_15429 = cljs.core.first.call(null,seq__15409_15423__$1);goog.dom.classes.toggle(node_15429,class$);
{
var G__15430 = cljs.core.next.call(null,seq__15409_15423__$1);
var G__15431 = null;
var G__15432 = 0;
var G__15433 = 0;
seq__15409_15413 = G__15430;
chunk__15410_15414 = G__15431;
count__15411_15415 = G__15432;
i__15412_15416 = G__15433;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15442__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15438_15443 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15439_15444 = null;var count__15440_15445 = 0;var i__15441_15446 = 0;while(true){
if((i__15441_15446 < count__15440_15445))
{var node_15447 = cljs.core._nth.call(null,chunk__15439_15444,i__15441_15446);goog.dom.classes.set(node_15447,classes_15442__$1);
{
var G__15448 = seq__15438_15443;
var G__15449 = chunk__15439_15444;
var G__15450 = count__15440_15445;
var G__15451 = (i__15441_15446 + 1);
seq__15438_15443 = G__15448;
chunk__15439_15444 = G__15449;
count__15440_15445 = G__15450;
i__15441_15446 = G__15451;
continue;
}
} else
{var temp__4092__auto___15452 = cljs.core.seq.call(null,seq__15438_15443);if(temp__4092__auto___15452)
{var seq__15438_15453__$1 = temp__4092__auto___15452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15438_15453__$1))
{var c__4148__auto___15454 = cljs.core.chunk_first.call(null,seq__15438_15453__$1);{
var G__15455 = cljs.core.chunk_rest.call(null,seq__15438_15453__$1);
var G__15456 = c__4148__auto___15454;
var G__15457 = cljs.core.count.call(null,c__4148__auto___15454);
var G__15458 = 0;
seq__15438_15443 = G__15455;
chunk__15439_15444 = G__15456;
count__15440_15445 = G__15457;
i__15441_15446 = G__15458;
continue;
}
} else
{var node_15459 = cljs.core.first.call(null,seq__15438_15453__$1);goog.dom.classes.set(node_15459,classes_15442__$1);
{
var G__15460 = cljs.core.next.call(null,seq__15438_15453__$1);
var G__15461 = null;
var G__15462 = 0;
var G__15463 = 0;
seq__15438_15443 = G__15460;
chunk__15439_15444 = G__15461;
count__15440_15445 = G__15462;
i__15441_15446 = G__15463;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15468_15472 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15469_15473 = null;var count__15470_15474 = 0;var i__15471_15475 = 0;while(true){
if((i__15471_15475 < count__15470_15474))
{var node_15476 = cljs.core._nth.call(null,chunk__15469_15473,i__15471_15475);goog.dom.setTextContent(node_15476,value);
{
var G__15477 = seq__15468_15472;
var G__15478 = chunk__15469_15473;
var G__15479 = count__15470_15474;
var G__15480 = (i__15471_15475 + 1);
seq__15468_15472 = G__15477;
chunk__15469_15473 = G__15478;
count__15470_15474 = G__15479;
i__15471_15475 = G__15480;
continue;
}
} else
{var temp__4092__auto___15481 = cljs.core.seq.call(null,seq__15468_15472);if(temp__4092__auto___15481)
{var seq__15468_15482__$1 = temp__4092__auto___15481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15468_15482__$1))
{var c__4148__auto___15483 = cljs.core.chunk_first.call(null,seq__15468_15482__$1);{
var G__15484 = cljs.core.chunk_rest.call(null,seq__15468_15482__$1);
var G__15485 = c__4148__auto___15483;
var G__15486 = cljs.core.count.call(null,c__4148__auto___15483);
var G__15487 = 0;
seq__15468_15472 = G__15484;
chunk__15469_15473 = G__15485;
count__15470_15474 = G__15486;
i__15471_15475 = G__15487;
continue;
}
} else
{var node_15488 = cljs.core.first.call(null,seq__15468_15482__$1);goog.dom.setTextContent(node_15488,value);
{
var G__15489 = cljs.core.next.call(null,seq__15468_15482__$1);
var G__15490 = null;
var G__15491 = 0;
var G__15492 = 0;
seq__15468_15472 = G__15489;
chunk__15469_15473 = G__15490;
count__15470_15474 = G__15491;
i__15471_15475 = G__15492;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15497_15501 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15498_15502 = null;var count__15499_15503 = 0;var i__15500_15504 = 0;while(true){
if((i__15500_15504 < count__15499_15503))
{var node_15505 = cljs.core._nth.call(null,chunk__15498_15502,i__15500_15504);goog.dom.forms.setValue(node_15505,value);
{
var G__15506 = seq__15497_15501;
var G__15507 = chunk__15498_15502;
var G__15508 = count__15499_15503;
var G__15509 = (i__15500_15504 + 1);
seq__15497_15501 = G__15506;
chunk__15498_15502 = G__15507;
count__15499_15503 = G__15508;
i__15500_15504 = G__15509;
continue;
}
} else
{var temp__4092__auto___15510 = cljs.core.seq.call(null,seq__15497_15501);if(temp__4092__auto___15510)
{var seq__15497_15511__$1 = temp__4092__auto___15510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15497_15511__$1))
{var c__4148__auto___15512 = cljs.core.chunk_first.call(null,seq__15497_15511__$1);{
var G__15513 = cljs.core.chunk_rest.call(null,seq__15497_15511__$1);
var G__15514 = c__4148__auto___15512;
var G__15515 = cljs.core.count.call(null,c__4148__auto___15512);
var G__15516 = 0;
seq__15497_15501 = G__15513;
chunk__15498_15502 = G__15514;
count__15499_15503 = G__15515;
i__15500_15504 = G__15516;
continue;
}
} else
{var node_15517 = cljs.core.first.call(null,seq__15497_15511__$1);goog.dom.forms.setValue(node_15517,value);
{
var G__15518 = cljs.core.next.call(null,seq__15497_15511__$1);
var G__15519 = null;
var G__15520 = 0;
var G__15521 = 0;
seq__15497_15501 = G__15518;
chunk__15498_15502 = G__15519;
count__15499_15503 = G__15520;
i__15500_15504 = G__15521;
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
{var value_15532 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15528_15533 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15529_15534 = null;var count__15530_15535 = 0;var i__15531_15536 = 0;while(true){
if((i__15531_15536 < count__15530_15535))
{var node_15537 = cljs.core._nth.call(null,chunk__15529_15534,i__15531_15536);node_15537.innerHTML = value_15532;
{
var G__15538 = seq__15528_15533;
var G__15539 = chunk__15529_15534;
var G__15540 = count__15530_15535;
var G__15541 = (i__15531_15536 + 1);
seq__15528_15533 = G__15538;
chunk__15529_15534 = G__15539;
count__15530_15535 = G__15540;
i__15531_15536 = G__15541;
continue;
}
} else
{var temp__4092__auto___15542 = cljs.core.seq.call(null,seq__15528_15533);if(temp__4092__auto___15542)
{var seq__15528_15543__$1 = temp__4092__auto___15542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15528_15543__$1))
{var c__4148__auto___15544 = cljs.core.chunk_first.call(null,seq__15528_15543__$1);{
var G__15545 = cljs.core.chunk_rest.call(null,seq__15528_15543__$1);
var G__15546 = c__4148__auto___15544;
var G__15547 = cljs.core.count.call(null,c__4148__auto___15544);
var G__15548 = 0;
seq__15528_15533 = G__15545;
chunk__15529_15534 = G__15546;
count__15530_15535 = G__15547;
i__15531_15536 = G__15548;
continue;
}
} else
{var node_15549 = cljs.core.first.call(null,seq__15528_15543__$1);node_15549.innerHTML = value_15532;
{
var G__15550 = cljs.core.next.call(null,seq__15528_15543__$1);
var G__15551 = null;
var G__15552 = 0;
var G__15553 = 0;
seq__15528_15533 = G__15550;
chunk__15529_15534 = G__15551;
count__15530_15535 = G__15552;
i__15531_15536 = G__15553;
continue;
}
}
} else
{}
}
break;
}
}catch (e15527){if((e15527 instanceof Error))
{var e_15554 = e15527;domina.replace_children_BANG_.call(null,content,value_15532);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15527;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15561_15565 = cljs.core.seq.call(null,children);var chunk__15562_15566 = null;var count__15563_15567 = 0;var i__15564_15568 = 0;while(true){
if((i__15564_15568 < count__15563_15567))
{var child_15569 = cljs.core._nth.call(null,chunk__15562_15566,i__15564_15568);frag.appendChild(child_15569);
{
var G__15570 = seq__15561_15565;
var G__15571 = chunk__15562_15566;
var G__15572 = count__15563_15567;
var G__15573 = (i__15564_15568 + 1);
seq__15561_15565 = G__15570;
chunk__15562_15566 = G__15571;
count__15563_15567 = G__15572;
i__15564_15568 = G__15573;
continue;
}
} else
{var temp__4092__auto___15574 = cljs.core.seq.call(null,seq__15561_15565);if(temp__4092__auto___15574)
{var seq__15561_15575__$1 = temp__4092__auto___15574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15561_15575__$1))
{var c__4148__auto___15576 = cljs.core.chunk_first.call(null,seq__15561_15575__$1);{
var G__15577 = cljs.core.chunk_rest.call(null,seq__15561_15575__$1);
var G__15578 = c__4148__auto___15576;
var G__15579 = cljs.core.count.call(null,c__4148__auto___15576);
var G__15580 = 0;
seq__15561_15565 = G__15577;
chunk__15562_15566 = G__15578;
count__15563_15567 = G__15579;
i__15564_15568 = G__15580;
continue;
}
} else
{var child_15581 = cljs.core.first.call(null,seq__15561_15575__$1);frag.appendChild(child_15581);
{
var G__15582 = cljs.core.next.call(null,seq__15561_15575__$1);
var G__15583 = null;
var G__15584 = 0;
var G__15585 = 0;
seq__15561_15565 = G__15582;
chunk__15562_15566 = G__15583;
count__15563_15567 = G__15584;
i__15564_15568 = G__15585;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15555_SHARP_,p2__15556_SHARP_){return f.call(null,p1__15555_SHARP_,p2__15556_SHARP_);
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
{if((function (){var G__15587 = list_thing;if(G__15587)
{var bit__4050__auto__ = (G__15587.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15587.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15587);
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
{if((function (){var G__15588 = content;if(G__15588)
{var bit__4050__auto__ = (G__15588.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15588.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15588.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15588);
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
{if((function (){var G__15589 = content;if(G__15589)
{var bit__4050__auto__ = (G__15589.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15589.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15589);
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